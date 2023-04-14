const authtokens = new Map()
const express = require('express')
const app = express()
const port = 8000


app.use(express.json())

const cors = require('cors');
app.use(cors())

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CoolPasswordThanks',
    database: 'DBUI'
})


connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Users

app.get('/user/auth', (req, res) => {
    const { email, password } = req.body
    const query = `SELECT (id) FROM user WHERE email='${email}' AND pass='${password}'`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        //console.log(rows)
        if (rows.length == 0) {
            res.status(401)
            res.send("Invalid credentials")
            return
        }
        res.status(201)
        token = generate_token(32)
        authtokens.set(token, rows[0]['id']);
        res.send("{auth: " + token + "}")
        return
    })
})

app.get('/user/:email', (req, res) => {
    const { email } = req.params
    console.log(email);
    const query = `SELECT (id, first_name, last_name, snowflake) FROM user WHERE email='${email}'`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        if (rows.length == 0) {
            res.status(404)
            res.send("We couldn't find the user you were looking for. Unfortunate, truly. Try harder I guess.")
        }
        const r = rows[0]
        res.status(200)
        res.json({
            'email': r['email'],
            'first_name': r['first_name'],
            'last_name': r['last_name'],
            'snowflake': r['snowflake'],
            'strikes': r['strikes']
        })
        return
    })
})

app.put('/users/clear', (req, res) => {
    //console.log(req)
    connection.query(`DELETE FROM user`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send("Successfully cleared users!")
    })
})

app.get('/users', (req, res) => {
    connection.query(`SELECT * FROM user`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

app.post('/user', (req, res) => {
    const {email, password, first_name, last_name} = req.body
    const query = `INSERT INTO user (email, pass, first_name, last_name) VALUES ('${email}', '${password}', '${first_name}', '${last_name}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(`Successfully added user with id ${rows['insertId']}`)
        res.status(200)
        res.send(`Successfully added user with id ${rows['insertId']}`)
    })
})

// Listings
app.post('/listing', (req, res) => {
    //console.log(req.body)
    const {title, price, token, desc, img} = req.body

    const query = `INSERT INTO listing (title, price, seller, item_description, imagelink) VALUES ('${title}', '${price}', '${authtokens.get(token)}', '${desc}', '${img}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(`Successfully added listing with id ${rows['insertId']}`)
        res.status(200)
        res.send(`Successfully added listing with id ${rows['insertId']}`)
    })
})

app.get('/listings', (req, res) => {
    connection.query(`SELECT * FROM listing`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

app.get('/listing/:id', (req, res) => {
    const { id } = req.params
    console.log(id);
    const query = `SELECT (title, price, created, seller, item_description, imagelink) FROM listing WHERE id='${ id }'`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        if (rows.length == 0) {
            res.status(404)
            res.send("We couldn't find the listing you were looking for. Unfortunate, truly. Try harder I guess.")
        }
        const r = rows[0]
        res.status(200)
        res.json({
            'id': r['id'],
            'title': r['title'],
            'price': r['price'],
            'created': r['created'],
            'seller': r['seller'],
            'item_description': r['item_description'],
            'imagelink': r['imagelink'],
            'approved': r['approved']
        })
        return
    })
})

app.post('/listing/:id/bid', (req, res) => {
    const { id } = req.params
    connection.query(`SELECT (id, bidder, bid, snowflake) FROM bid WHERE listing='${id}'`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

app.get('/listing/:id/bids', (req, res) => {
    // TODO: Check if bid is high enough first
    const { id } = req.params
    const { token, bid } = req.body

    const query = `INSERT INTO bid (listing, bidder, bid) VALUES ('${id}', '${authtokens.get(token)}', '${bid}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(`Successfully added bid with id ${rows['insertId']}`)
        res.status(200)
        res.send(`Successfully added bid with id ${rows['insertId']}`)
    })
})

app.put('/listings/clear', (req, res) => {
    //console.log(req)
    connection.query(`DELETE FROM listing`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send("Successfully cleared users!")
    })
})

// TODO: get bid

app.post('/user/:id/review', (req, res) => {
    const { id } = req.params
    const { token, review } = req.body

    const query = `INSERT INTO review (user, review, seller) VALUES ('${authtokens.get(token)}', '${review}', '${id}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(`Successfully added bid with id ${rows['insertId']}`)
        res.status(200)
        res.send(`Successfully added bid with id ${rows['insertId']}`)
    })
})

// TODO: get reviews

// TODO: Tags

//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function generate_token(length){
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

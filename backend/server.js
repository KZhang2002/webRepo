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

app.get('/user/auth', (req, res) => {
    const { email, password } = req.body
    const query = `SELECT * FROM user WHERE email='${email}' AND pass='${password}'`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        if (rows.length == 0) {
            res.status(401)
            res.send("Invalid credentials")
            return
        }
        res.status(201)
        token = generate_token(32)
        //authtokens.set(token, rows['insertID']);
        res.send("{auth: " + token + "}")
        return
    })
})

app.get('/user/:email', (req, res) => {
    const { email } = req.params
    console.log(email);
    const query = `SELECT * FROM user WHERE email='${email}'`
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

app.post('/listing', (req, res) => {
    const q = req.body
    const title = q["title"]
    const price = q["price"]
    const seller_email = q["seller"]
    const desc = q["desc"]
    const img = q["img"]

    const query = `INSERT INTO listing (title, price, seller, item_description, imagelink) VALUES ('${title}', '${price}', (SELECT user.id FROM user WHERE user.email='${seller_email}'), '${desc}', '${img}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(`Successfully added listing with id ${rows['insertId']}`)
        res.status(200)
        res.send(`Successfully added listing with id ${rows['insertId']}`)
    })
})

app.get('/users', (req, res) => {
    connection.query(`SELECT * FROM user`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})

app.get('/listings', (req, res) => {
    connection.query(`SELECT * FROM listing`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
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


/*app.put('/parse', (req, res) => {
    console.log(req.body)

    try {
        const body = req.body
        const name = body["first"] + " " + body["last"]
        const age = body["age"]
        const isAdmin = body ["admin"] ? "is an admin" : "is not an admin"
        const message = `${name} is ${age} years old and ${isAdmin}`
        res.status(200)
        res.send(message)
    } catch (err) {
        console.log(err)
    }
})*/

/*app.get('/db', (req, res) => {
    connection.query('SHOW TABLES', (err, rows, fields) =>{
        if (err) throw err

        console.log(rows)
        res.status(200)
        res.send(rows)
    })
})*/

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

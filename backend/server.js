const authtokens = new Map()
const express = require('express')
const app = express()
const port = 8000


app.use(express.json())

const cors = require('cors')
app.use(cors())

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CoolPasswordThanks',
    database: 'DBUI'
})


connection.connect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/createexample', (req, res) => {
    problem = false
    
    // Clear all databases
    connection.query('DELETE FROM bid', (err, rows, fields) => { })
    connection.query('DELETE FROM review', (err, rows, fields) => { })
    connection.query('DELETE FROM tag', (err, rows, fields) => { })
    connection.query('DELETE FROM listing', (err, rows, fields) => { })
    connection.query('DELETE FROM user', (err, rows, fields) => { })

    // Populate all databases
    // TODO populate tag
    let query = `INSERT INTO user (email, pass, first_name, last_name) VALUES ('beans@beans.beans', 'beansbeans', 'Beans', 'Beans')`
    connection.query(query, (err, rows, fields) => { })
    query = `INSERT INTO user (email, pass, first_name, last_name) VALUES ('jperry@tcu.edu', 'HornedToads3', 'Joshua', 'Perry')`
    connection.query(query, (err, rows, fields) => { })

    let thomasID = 0
    query = `INSERT INTO user (email, pass, first_name, last_name) VALUES ('thomassss@jail.com', 'I wish I could see the kids', 'Thomas', 'Sebastian')`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
            problem = true
            return
        }
        thomasID = rows['insertId']

        query = `INSERT INTO user (email, pass, first_name, last_name) VALUES ('johndoe@smu.edu', 'PerunaPog', 'John', 'Doe')`
        connection.query(query, (err, rows, fields) => {
            if (err) {
                res.status(500).send(err)
                problem = true
                return
            }
            query = `INSERT INTO listing (title, price, seller, item_description, imagelink) VALUES ('Can of Beans', '1.49', '${rows['insertId']}', 'These are beans.', 'https://easydinnerideas.com/wp-content/uploads/2022/06/Easy-Baked-Beans-1-720x540.jpeg')`
            connection.query(query, (err, rows, fields) => { })
            query = `INSERT INTO review (user, review, seller) VALUES ('${thomasID}', 'This guy sucks. He took my wife and kids.', '${rows['insertId']}')`
            connection.query(query, (err, rows, fields) => { })
        })
    })
    if (problem) return
    res.status(200)
    res.send("Successfully filled databases!")
})

// Users

app.get('/user/auth', (req, res) => {
    const { email, password } = req.query
    if (!(email && password)) {
        res.status(400).send("Missing some or all of query string")
        return
    }
    const query = `SELECT id FROM user WHERE email='${email}' AND pass='${password}'`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send('Internal server error')
            return
        }
        if (rows.length == 0) {
            res.status(400).send('Invalid email and/or password')
            return
        }
        res.status(201)
        token = generate_token(32)
        authtokens.set(token, rows[0]['id'])
        res.send({ auth: token })
        return
    })
})

app.get('/user/:email', (req, res) => {
    const { email } = req.params
    console.log(email)
    const query = `SELECT id, first_name, last_name, snowflake FROM user WHERE email='${email}'`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            return
        }
        if (rows.length === 0) {
            res.status(404).send()
            return
        }
        res.status(200)
        res.send(rows[0])
        return
    })
})

app.put('/users/clear', (req, res) => {
    //console.log(req)
    connection.query(`DELETE FROM user`, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            return
        }

        res.status(200)
        res.send("Successfully cleared users!")
    })
})

app.get('/users', (req, res) => {
    connection.query(`SELECT id, email, first_name, last_name, snowflake FROM user`, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            return
        }

        res.status(200)
        res.send(rows)
    })
})

app.post('/user', (req, res) => {
    const { email, password, first_name, last_name } = req.body
    if (!(email && password && first_name && last_name)) {
        res.status(400).send("Missing some or all of query string")
        return
    }
    const query = `
        INSERT INTO user (email, pass, first_name, last_name)
        SELECT '${email}', '${password}', '${first_name}', '${last_name}'
        WHERE NOT EXISTS (SELECT 1 FROM user WHERE email = '${email}')`
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send()
            return
        }

        if (result.affectedRows === 0) {
            res.status(409)
            res.send(`Email ${email} is already in use`)
            return
        }

        res.status(201).send()
    })
})

// Listings
app.post('/listing', (req, res) => {
    const { title, price, token, desc, img, tags } = req.body
    if (!(title && price && token && desc && img)) {
        res.status(400).send("Missing some or all of query string")
        return
    }
    const seller_id = authtokens.get(token)

    if (!seller_id) {
        res.status(401).send()
        return
    }

    const query = `INSERT INTO listing (title, price, seller, item_description, imagelink) VALUES ('${title}', '${price}', '${seller_id}', '${desc}', '${img}')`

    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500)
            res.send('Error while adding listing')
            console.log(err)
            return
        }
        
        problem = false

        if (tags) {
            let q = 'INSERT INTO tag (listing, tag_name) VALUES '
            tags.split(',').forEach(function(tag, i, arr){
                q+=`('${rows.insertId}', '${tag}')`
                if (i != (arr.length-1)) q+=', '
            })
            connection.query(q, (err, rows, fields) => {
                if (err) {
                    res.status(500)
                    res.send('Error while adding tags')
                    console.log(err)
                    problem = true
                    return
                }
            })
        }
        if (problem) return
        res.status(200).send()
    })
})

app.get('/listings', (req, res) => {
    const { query, tags, minPrice, maxPrice, user } = req.query
    let sqlQuery = `
        SELECT l.id, l.title, l.price as starting_bid_price, b.current_bid_price, l.created, u.email as seller_email, l.item_description, l.imagelink, GROUP_CONCAT(t.tag_name) AS tags 
        FROM listing l 
        LEFT JOIN tag t ON l.id = t.listing 
        LEFT JOIN user u ON l.seller = u.id
        LEFT JOIN (
            SELECT listing, MAX(bid) as current_bid_price 
            FROM bid 
            GROUP BY listing
        ) b ON l.id = b.listing
    `
    let conditions = []

    if (query) {
        const termsArray = query.split(' ')
        const wildcardPatterns = termsArray.map(term => `%${term}%`)
        const wildcardList = wildcardPatterns.join(' OR ')
        conditions.push(`(l.title LIKE '${wildcardList}' OR l.item_description LIKE '${wildcardList}')`)
    }

    if (tags) {
        conditions.push(`ID IN (SELECT DISTINCT listing FROM tag WHERE tag_name IN (${tags.split(',').map(tag => `'${tag}'`).join(',')}))`)
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        conditions.push(`l.price BETWEEN ${minPrice} AND ${maxPrice}`)
    } else if (minPrice !== undefined) {
        conditions.push(`l.price >= ${minPrice}`)
    } else if (maxPrice !== undefined) {
        conditions.push(`l.price <= ${maxPrice}`)
    }

    if (user) {
        conditions.push(`u.email = '${user}'`)
    }

    if (conditions.length > 0) {
        sqlQuery += ' WHERE ' + conditions.join(' AND ')
    }

    sqlQuery += ' GROUP BY l.id'

    connection.query(sqlQuery, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            console.log(err)
            return
        }

        rows.forEach(function(r) {
            if (r['tags']) r['tags'] = r['tags'].split(',')
            else r['tags'] = []
        })

        res.status(200)
        res.send(rows)
    })
})


//Hi sithindu check this 
app.get('/listings/:email', (req, res) => {
    const { query, tags, minPrice, maxPrice, user } = req.query
    
    const { email } = req.query
    let sqlQuery = `
        SELECT l.id, l.title, l.price as starting_bid_price, b.current_bid_price, l.created, u.email as seller_email, l.item_description, l.imagelink, GROUP_CONCAT(t.tag_name) AS tags 
        FROM listing l 
        LEFT JOIN tag t ON l.id = t.listing 
        LEFT JOIN user u ON l.seller = u.id
        LEFT JOIN (
            SELECT listing, MAX(bid) as current_bid_price 
            FROM bid 
            GROUP BY listing
        ) b ON l.id = b.listing
        WHERE u.email = '${email}'
    `
    let conditions = []

    if (query) {
        const termsArray = query.split(' ')
        const wildcardPatterns = termsArray.map(term => `%${term}%`)
        const wildcardList = wildcardPatterns.join(' OR ')
        conditions.push(`(l.title LIKE '${wildcardList}' OR l.item_description LIKE '${wildcardList}')`)
    }

    if (tags) {
        conditions.push(`ID IN (SELECT DISTINCT listing FROM tag WHERE tag_name IN (${tags.split(',').map(tag => `'${tag}'`).join(',')}))`)
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        conditions.push(`l.price BETWEEN ${minPrice} AND ${maxPrice}`)
    } else if (minPrice !== undefined) {
        conditions.push(`l.price >= ${minPrice}`)
    } else if (maxPrice !== undefined) {
        conditions.push(`l.price <= ${maxPrice}`)
    }

    if (user) {
        conditions.push(`u.email = '${user}'`)
    }

    if (conditions.length > 0) {
        sqlQuery += ' WHERE ' + conditions.join(' AND ')
    }

    sqlQuery += ' GROUP BY l.id'

    connection.query(sqlQuery, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            console.log(err)
            return
        }

        rows.forEach(function(r) {
            if (r['tags']) r['tags'] = r['tags'].split(',')
            else r['tags'] = []
        })

        res.status(200)
        res.send(rows)
    })
})

app.get('/listing/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    const query = `
    SELECT l.title, l.price as starting_bid_price, b.current_bid_price, l.created, u.email as seller_email, l.item_description, l.imagelink, GROUP_CONCAT(t.tag_name) AS tags 
    FROM listing l 
    LEFT JOIN tag t ON l.id = t.listing 
    LEFT JOIN user u ON l.seller = u.id
    LEFT JOIN (
        SELECT listing, MAX(bid) as current_bid_price 
        FROM bid 
        GROUP BY listing
    ) b ON l.id = b.listing
    WHERE l.id = '${id}'
`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send()
            return
        }

        console.log(rows)
        if (rows.length == 0) {
            res.status(404)
            res.send("We couldn't find the listing you were looking for. Unfortunate, truly. Try harder I guess.")
            return
        }
        let r = rows[0]
        if (r['tags']) r['tags'] = r['tags'].split(',')
        else r['tags'] = []
        res.status(200)
        res.send(r)
        return
    })
})

app.post('/listing/:id/bid', (req, res) => {
    const { id } = req.params
    const { token, bid } = req.body
    if (!(token && bid)) {
        res.status(400).send("Missing some or all of query string")
        return
    }
    
    const subQuery = `SELECT MAX(bid) as max_bid FROM bid WHERE listing=${id}`
    const query = `INSERT INTO bid (listing, bidder, bid) SELECT ${id}, '${authtokens.get(token)}', '${bid}' FROM (SELECT IFNULL((${subQuery}), 0) AS max_bid) t WHERE ${bid} > max_bid`
    
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
            return
        }

        if (rows.affectedRows === 0) {
            res.status(400).send("Bid is not high enough.")
            return
        }

        res.status(200).send()
    })
})

app.get('/listing/:id/bids', (req, res) => {
    const { id } = req.params
    connection.query(`
            SELECT b.id AS id, u.email AS bidder_email, b.bid AS bid, b.snowflake AS snowflake
            FROM bid b
            JOIN user u ON b.bidder = u.id
            WHERE b.listing = '${id}'
        `, (err, rows, fields) => {
      if (err) {
        res.status(500).send(err)
        return
      }
      
      if (rows.length === 0) {
        res.status(204).send('No bids found for this listing.')
        return
      }
  
      res.status(200).send(rows)
    });
  });

app.put('/listings/clear', (req, res) => {
    //console.log(req)
    connection.query(`DELETE FROM listing`, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
            return
        }

        res.status(200).send()
        res.send("Successfully cleared listings!")
    })
})

// TODO: get bid

app.post('/user/:email/review', (req, res) => {
    const { email } = req.params
    const { token, review } = req.body
    if (!(token && review)) {
        res.status(400).send("Missing some or all of query string")
        return
    }

    const query = `INSERT INTO review (user, review, seller) VALUES ('${authtokens.get(token)}', '${review}', (SELECT id FROM user WHERE email='${email}'))`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
            return
        }

        res.status(201).send()
    })
})

app.get('/user/:email/reviews', (req, res) => {
    const { email } = req.params
    connection.query(`
                SELECT r.id, r.review, r.user, u.first_name, u.last_name, r.snowflake
                FROM review r
                INNER JOIN user u ON r.user = u.id
                INNER JOIN user s ON r.seller = s.id
                WHERE s.email = '${email}'`, (err, rows, fields) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.status(200)
        res.send(rows)
    })
})

// TODO: Tags

//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function generate_token(length) { // Stack Overflow
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("")
    var b = []
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0)
        b[i] = a[j]
    }
    return b.join("")
}

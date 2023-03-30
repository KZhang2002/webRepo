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
    password: 'password',
    database: 'DBUI'
})


connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    const { username, password } = req.body
    const query = `SELECT * FROM users (username, password) VALUES ('${username}', '${password}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        res.status(201)
        token = "beans" // TODO: Token generation
        res.send("{auth: " + token + "}")
        return
    })
    res.status(401)
    res.send("Invalid credentials")
})

app.post('/user', (req, res) => {
    const { username, password } = req.body
    const query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
        res.status(200)
        res.send("Successfully added user!")
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

/*app.get('/users', (req, res) => {
    connection.query(`SELECT * FROM users`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send(rows)
    })
})*/

/*app.put('/users/clear', (req, res) => {
    connection.query(`DELETE FROM users`, (err, rows, fields) => {
        if (err) throw err

        res.status(200)
        res.send("Successfully cleared users!")
    })
})*/

//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

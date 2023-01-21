const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/books', (req, res)=>{
    const query = "SELECT * FROM books"

    conn.query(query, (err, data)=>{
        if(err){
            console.log(err);
            return
        }

        const books = data

        console.log(books);
    })
})

app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title
    const pages = req.body.pages

    const query = `INSERT INTO books (title, pages) VALUES('${title}', '${pages}')`

    conn.query(query, (err)=>{
        if(err){
            console.log(err);
        }

        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('conectou ao mySQL');

    app.listen(3001)
}) 
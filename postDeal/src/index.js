const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const formRoutes = require('../routes/formRoute')

const basePath = path.join(__dirname, '../templates')

//ler o body
app.use(express.urlencoded({
    extended: true, 
}))

app.use(express.json())

//*************/

app.use('/users', formRoutes)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
    console.log(basePath)
    console.log(formRoutes)
})


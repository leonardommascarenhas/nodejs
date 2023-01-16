const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res)=>{
    
    const name = req.body.name
    const age = req.body.age

    console.log(`nome ${name} e idade ${age}`)

    res.sendFile(`${basePath}/userForm.html`)
})



module.exports = router
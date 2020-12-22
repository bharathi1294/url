const express = require("express")
const path = require("path")
const shortId = require('shortid')
const bodyParser = require('body-parser')
const app = express()

//app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine','ejs')

app.get('/', (req, res) => {
    let hostname =req.headers.host
    res.render('index',{full:username,short:shortId.generate(),host:hostname})
})
let username
app.post('/post',(req,res)=>{
    username = req.body.username
    res.redirect('/')
})

app.get('/:shorturl',(req,res)=>{
    res.redirect(username)
})

app.listen(process.env.PORT || 3000,() => console.log("server running"))
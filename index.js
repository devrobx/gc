const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')


const app = express()
const PORT = process.env.PORT || 5000

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* BODY PARSE MIDDLE WARE */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//static folder
app.use(express.static(path.join(__dirname,'public')));

/* PAGES */

app.get('/', (req,res) =>{
    const title = 'Globe Connect'
    res.render('home', {
        title: title
    })
})

app.get('/about', (req,res) =>{
    res.render('about')
})

app.get('/team', (req,res) =>{
    res.render('team')
})

app.get('/blog', (req,res) =>{
    res.render('blog')
})

app.get('/blog/post', (req,res) =>{
    res.render('post')
})
app.get('/contact', (req,res) =>{
    res.render('contact')
})






app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
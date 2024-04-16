const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// the following is needed to use views
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// see the views/about.hbs file for the contents of this view


app.get('/', (req, res) => {
    res.render('home')
  })

app.get('/lectures', (req, res) => {
    res.render('lecture')
  })

app.get('/grades', (req, res) => {
    res.render('grades')
  })

app.get('/contact', (req, res) => {
    res.render('contact')
  })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))

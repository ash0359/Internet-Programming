const express = require('express')
const data = require('./data.json')
const expressHandlebars = require('express-handlebars')
const app = express()

// the following is needed to use views
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// see the views/about.hbs file for the contents of this view
app.get('/', (req, res) => {
  const {title, year, next} = data["The-Birth"];
  res.render('1969',{
    title,year,next
  })
})

app.get('/The-First-Website', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('firstweb',{
      title,year,next
    })
  })

app.get('/Welcome-to-the-Wired-World', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('wired',{
      title,year,next
    })
  })

app.get('/Dot-Com-Boom', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('dotcom',{
      title,year,next
    })
  })
  
app.get('/Cloud-Computing-Takes-off', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('cloud',{
      title,year,next
    })
  })

app.get('/Today', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('today',{
      title,year,next
    })
  })

app.get('/Web-2.0', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('web2',{
      title,year,next
    })
  })

app.get('/The-Birth_of_at_Sign', (req, res) => {
  const {title, year, next} = data[req.path.replace("/","")];
    res.render('atsign',{
      title,year,next
    })
  })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))

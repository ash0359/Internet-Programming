const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// the following is needed to use views
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// see the views/home.handlebars file for the contents of this view
let col = "";
app.get('/:col', function(req, res) {
  col = req.params.col; // Get the value of the col parameter
  console.log(col); // Output the value to the console
  res.render('home', { col: col }); // Pass the value to the view
});


app.get('/', (req, res) => {
    res.render('home')
})
 

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))

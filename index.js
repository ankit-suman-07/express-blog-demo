const express = require('express')
const exphbs = require('express-handlebars');


const app = express()
const path = require('path')
const port = 3002

app.engine('handlebars', exphbs({
    defaultLayout: 'main', // Optional: specify the default layout file (main.handlebars)
    extname: '.handlebars'  // Optional: specify the file extension for Handlebars templates
}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog App listening on port http://localhost:${port}`)
})
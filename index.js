const express = require('express')
const app = express()
const path = require('path')
const port = 3002

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog App listening on port http://localhost${port}`)
})
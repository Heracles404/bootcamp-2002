const express = require('express');
const app = express();
const path = require('path');

// views folder is required
app.set('view engine', 'ejs');
// to be able to read views folder from any path or directory
app.set('views', path.join(__dirname, '/views'));



app.get('/', (req, res) => {
    res.render('home.ejs')
})


// Port
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
// routing
const express = require('express')
const app = express()
const port = 3000

// Manually creating routes
// link/cats
app.get('/cats', (req, res) => {
    res.send('<h1>Meow!</h1>')
})

// link/dogs
app.get('/dog', (req, res) => {
    res.send('<h1>Woofs!</h1>')
})

// Homepage
// Default Callback/Display in browser -- request and response
app.get('/', (req, res) => {
    res.send('<h1>This is my webpage!</h1>')
})

// ================================================================================

// generating a routing/path pattern, like in subreddit
app.get('/r/:topic', (req, res) => {
    const {topic} = req.params;
    res.send(`<h1>Browsing the ${topic} section.</h1>`)
})

app.get('/r/:topic/:postID', (req, res) => {
    const {topic, postID} = req.params;
    res.send(`<h1>Viewing PostID: ${postID} on ${topic} section.</h1>`)
})

// ================================================================================

// Queries
app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing found if nothing searched!</h1>`)
    }
    res.send(`<h1> Search results for: ${q}</h1>`)
})

// ================================================================================


// Always at the end of link/route, if path is not found
app.get('*', (req, res) => {
    res.send('<h1>I do not know that path</h1>')
})

// app.use((req, res) => {
//     console.log("We got a new request")
//     // res.send("Hello! We got your request. This is a response.")
//     res.send('<h1>This is my webpage!</h1>')
// })


// Defines localhost/port
app.listen(port, () => {
    console.log("LISTENING ON PORT 3000!")
})
const port = 55155
const express = require("express")
const path = require("path")
const app = express()

app.use(express.static("Frontend"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend/views", "index.html"))
})

app.get("/*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "Frontend/views", "404.html"))
})

app.listen(port, ()  => {
    console.log(`Server running on port ${port}..`)
})
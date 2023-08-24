const port = 55155
const express = require("express")
const app = express()

app.use(express.static("Frontend"))

app.get("/", (req, res) => {
    res.sendFile("./Frontend/views/index.html", {root: __dirname})
})

app.listen(port, ()  => {
    console.log(`Server running on port ${port}..`)
})
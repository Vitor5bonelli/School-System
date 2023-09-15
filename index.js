const port = process.env.port || 55155
const express = require("express")
const app = express()

const alunoRouter = require("./routes/Aluno")
const disciplinaRouter = require("./routes/Disciplina")
const turmaRouter = require("./routes/Turma")
app.use("/alunos", alunoRouter)
app.use("/disciplinas", disciplinaRouter)
app.use("/turmas", turmaRouter)

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/*", (req, res) => {
    res.send("Error 404")
})

app.listen(port, ()  => {
    console.log(`Server running on port ${port}..`)
})
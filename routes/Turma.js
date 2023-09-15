const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({data: "Listar turmas."})
})

router.get("/:id", (req, res) => {
    res.send({data: "Dados de uma turma."})
})

router.get("/alunos", (req, res) => {
    res.send({data: "Listar alunos da turma."})
})

router.post("/", (req, res) => {
    res.send({data: "Criou nova turma!"})
})

router.put("/:id", (req, res) => {
    res.send({data: "Atualizou dados da turma!"})
})

router.delete("/", (req, res) => {
    res.send({data: "Turma removida!"})
})

module.exports = router
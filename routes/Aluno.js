const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({data: "Dados dos alunos."})
})

router.get("/:ra", (req, res) => {
    res.send({data: "Dados de um aluno."})
})

router.get("/:ra/disciplinas", (req, res) => {
    res.send({data: "Todas as disciplinas de um aluno."})
})

router.post("/", (req, res) => {
    res.send({data: "Aluno cadastrado!"})
})

router.put("/", (req, res) => {
    res.send({data: "Dados do aluno atualizados!"})
})

router.delete("/", (req, res) => {
    res.send({data: "Aluno removido!"})
})

module.exports = router
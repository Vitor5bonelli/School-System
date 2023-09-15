const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({data: "Listar disciplinas."})
})

router.get("/:id", (req, res) => {
    res.send({data: "Dados de uma disciplina."})
})

router.get("/alunos", (req, res) => {
    res.send({data: "Listar alunos da disciplina."})
})

router.post("/", (req, res) => {
    res.send({data: "Criou nova disciplina!"})
})

router.put("/:id", (req, res) => {
    res.send({data: "Atualizou dados da disciplina!"})
})

router.delete("/", (req, res) => {
    res.send({data: "Disciplina removida!"})
})


module.exports = router
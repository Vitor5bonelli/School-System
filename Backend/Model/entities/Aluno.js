class Aluno {
    _ra
    _nome
    _idade
    _curso
    _periodoIngresso
    _disciplinas

    constructor(ra, nome, idade, curso, periodoIngresso){
        this._ra = ra
        this._nome = nome
        this._idade = idade
        this._curso = curso
        this._periodoIngresso = periodoIngresso
        this._disciplinas = new Set()
    }

    getNome(){
        return this._ra
    }

    getNome(){
        return this._nome
    }

    getIdade(){
        return this._idade
    }

    getCurso(){
        return this._curso
    }

    getPeriodoIngresso(){
        return this._periodoIngresso
    }


}

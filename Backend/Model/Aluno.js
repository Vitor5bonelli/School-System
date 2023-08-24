class Aluno {
    _nome;
    _idade;
    _curso;
    _periodoIngresso;

    constructor(nome, idade, curso, periodoIngresso){
        this._nome = nome
        this._idade = idade
        this._curso = curso
        this._periodoIngresso = periodoIngresso
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

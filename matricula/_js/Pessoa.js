class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Eu sou ${this.nome} com idade ${this.idade}`;
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, numeroMatricula) {
    super(nome, idade);
    this.numeroMatricula = numeroMatricula;
  }

  apresentar() {
    return `${super.apresentar()} e sou aluno com número de matrícula ${this.numeroMatricula}`;
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, especialidade) {
    super(nome, idade);
    this.especialidade = especialidade;
  }

  apresentar() {
    return `${super.apresentar()} e sou professor com especialidade em ${this.especialidade}`;
  }
}

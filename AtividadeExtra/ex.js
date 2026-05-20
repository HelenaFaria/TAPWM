class Pessoa {
  constructor(idade, nome, hobby) {
    this.idade = idade;
    this.nome = nome;
    this.hobby = hobby;
  }
}

const prototipoPessoa = { idade: 0, nome: "", hobby: "" };

const criarPessoa = (idade, nome, hobby) => ({ idade, nome, hobby });

function Pessoaa(idade, nome, hobby) {
  this.idade = idade;
  this.nome = nome;
  this.hobby = hobby;
}

const pessoa1 = criarPessoa(20, "kaiky", "fumar");
const pessoa2 = new Pessoa(20, "kaiky", "fumar");
const pessoa3 = { nome: "kaiky", idade: 20, hobby: "fumar" };
const pessoa4 = Object.create(prototipoPessoa); 
pessoa4.idade = 20; 
pessoa4.nome = "kaiky"; 
pessoa4.hobby = "fumar";
const pessoa5 = new Pessoaa(20, "kaiky", "fumar"); // Alterado para a função construtora 'Pessoaa'

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);
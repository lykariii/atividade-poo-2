class Jogador{
  constructor(nome, data_nascimento, ano_nascimento, posicao, altura, nacionalidade, peso){
    this.nome = nome;
    this.data_nascimento = data_nascimento;
    this.ano_nascimento = ano_nascimento;
    this.posicao = posicao;
    this.altura = altura;
    this.nacionalidade = nacionalidade;
    this.peso = peso;
  }

  mostrarAtributos(){
    console.log(this.nome)
    console.log(this.data_nascimento)
    console.log(this.ano_nascimento)
    console.log(this.posicao)
    console.log(this.altura)
    console.log(this.nacionalidade)
    console.log(this.peso)
  }

calcularIdade(){
  return 2022 - this.ano_nascimento;
}

idade(){
  return this.calcularIdade();
 }

calcularAposentadoria(){
 if(this.posicao == "ataque"){
  return 35 - jogador.idade();
 }
  
 else if(this.posicao == "meio_campo"){
  return 38 - jogador.idade();
 }
   
  else if(this.posicao == "defesa"){
  return 40 - jogador.idade();
 }
}  
aposenta(){
  return this.calcularAposentadoria();
}
}

let jogador = new Jogador("Mbappé", "13/07/1998", "1998", "ataque", "175", "frances", "66");

jogador.mostrarAtributos();
console.log(jogador.idade());
console.log(jogador.aposenta());
export default class Alimento {
  constructor(id, nome, fatorCorrecao, indiceConversao) {
    this.id = id;
    this.nome = nome;
    this.fatorCorrecao = fatorCorrecao;
    this.indiceConversao = indiceConversao;
  }

  get pesoBruto() {
    return +((1 / this.indiceConversao) * this.fatorCorrecao).toFixed(3);
  }
}

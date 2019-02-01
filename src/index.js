import Alimento from './alimento';
import alimentos from '../data/alimentos.json';

export default class AlimentometroWrapper {
  static getAlimentos() {
    return alimentos.map((a, i) => new Alimento(i + 1, a.nome, a.fatorCorrecao, a.indiceConversao));
  }

  static formata(peso = 0) {
    if (!peso || peso < 0) {
      return '0g';
    }

    if (peso < 1000) {
      return `${Math.ceil(peso)}g`;
    }

    const nf = new Intl.NumberFormat('pt-BR');
    return `${nf.format(peso / 1000)}kg`;
  }
}

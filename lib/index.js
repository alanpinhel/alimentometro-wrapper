'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alimento = require('./alimento');

var _alimento2 = _interopRequireDefault(_alimento);

var _alimentos = [{
  id: 1,
  nome: 'Abacate',
  fatorCorrecao: 1.46,
  indiceConversao: 1
}, {
  id: 2,
  nome: 'Abacaxi',
  fatorCorrecao: 1.93,
  indiceConversao: 1
}, {
  id: 3,
  nome: 'Abacaxi P\xE9rola',
  fatorCorrecao: 1.61,
  indiceConversao: 1
}, {
  id: 4,
  nome: 'Ab\xF3bora',
  fatorCorrecao: 1.33,
  indiceConversao: 1
}, {
  id: 5,
  nome: 'Ab\xF3bora Paulista',
  fatorCorrecao: 1.6,
  indiceConversao: 0.77
}, {
  id: 6,
  nome: 'Ab\xF3bora Rabuti\xE3',
  fatorCorrecao: 1.22,
  indiceConversao: 0.98
}, {
  id: 7,
  nome: 'Abobrinha',
  fatorCorrecao: 1.26,
  indiceConversao: 1
}, {
  id: 8,
  nome: 'Acelga',
  fatorCorrecao: 1.43,
  indiceConversao: 1
}, {
  id: 9,
  nome: 'Ac\xE9m',
  fatorCorrecao: 1.17,
  indiceConversao: 1
}, {
  id: 10,
  nome: 'Agri\xE3o',
  fatorCorrecao: 1.34,
  indiceConversao: 1
}, {
  id: 11,
  nome: 'Aipo',
  fatorCorrecao: 1.34,
  indiceConversao: 1
}, {
  id: 12,
  nome: 'Alcachofra',
  fatorCorrecao: 2.08,
  indiceConversao: 1
}, {
  id: 13,
  nome: 'Alcatra',
  fatorCorrecao: 1.16,
  indiceConversao: 1
}, {
  id: 14,
  nome: 'Alface Crespa',
  fatorCorrecao: 1.46,
  indiceConversao: 1
}, {
  id: 15,
  nome: 'Alface Lisa',
  fatorCorrecao: 1.31,
  indiceConversao: 1
}, {
  id: 16,
  nome: 'Alho',
  fatorCorrecao: 1.08,
  indiceConversao: 1
}, {
  id: 17,
  nome: 'Alho Por\xF3',
  fatorCorrecao: 1.62,
  indiceConversao: 1
}, {
  id: 18,
  nome: 'Almeir\xE3o',
  fatorCorrecao: 1.12,
  indiceConversao: 1
}, {
  id: 19,
  nome: 'Ameixa Preta Seca',
  fatorCorrecao: 1.19,
  indiceConversao: 1
}, {
  id: 20,
  nome: 'Ameixa Rosada',
  fatorCorrecao: 1.11,
  indiceConversao: 1
}, {
  id: 21,
  nome: 'Ameixa Roxa',
  fatorCorrecao: 1.04,
  indiceConversao: 1
}, {
  id: 22,
  nome: 'Am\xEAndoa',
  fatorCorrecao: 1.81,
  indiceConversao: 1
}, {
  id: 23,
  nome: 'Amendoim',
  fatorCorrecao: 2.69,
  indiceConversao: 1
}, {
  id: 24,
  nome: 'Ara\xE7\xE1',
  fatorCorrecao: 1.16,
  indiceConversao: 1
}, {
  id: 25,
  nome: 'Arenque',
  fatorCorrecao: 1.78,
  indiceConversao: 1
}, {
  id: 26,
  nome: 'Arroz Integral',
  fatorCorrecao: 1,
  indiceConversao: 2.46
}, {
  id: 27,
  nome: 'Arroz Parboilizado',
  fatorCorrecao: 1,
  indiceConversao: 2.33
}, {
  id: 28,
  nome: 'Arroz Polido',
  fatorCorrecao: 1,
  indiceConversao: 2.33
}, {
  id: 29,
  nome: 'Asa de Frango',
  fatorCorrecao: 2.24,
  indiceConversao: 1
}, {
  id: 30,
  nome: 'Asa e Sobreasa de Frango',
  fatorCorrecao: 1.81,
  indiceConversao: 1
}, {
  id: 31,
  nome: 'Aspargo',
  fatorCorrecao: 2,
  indiceConversao: 1
}, {
  id: 32,
  nome: 'Avel\xE3',
  fatorCorrecao: 2.1,
  indiceConversao: 1
}, {
  id: 33,
  nome: 'Azeitona',
  fatorCorrecao: 1.28,
  indiceConversao: 1
}, {
  id: 34,
  nome: 'Azeitona Verde em Conserva',
  fatorCorrecao: 1.4,
  indiceConversao: 1
}, {
  id: 35,
  nome: 'Bacalhau',
  fatorCorrecao: 2.52,
  indiceConversao: 1
}, {
  id: 36,
  nome: 'Bacon',
  fatorCorrecao: 1,
  indiceConversao: 0.22
}, {
  id: 37,
  nome: 'Banana D\'\xC1gua',
  fatorCorrecao: 1.66,
  indiceConversao: 1
}, {
  id: 38,
  nome: 'Banana Ma\xE7\xE3',
  fatorCorrecao: 1.53,
  indiceConversao: 1
}, {
  id: 39,
  nome: 'Banana Nanica / Catuarra',
  fatorCorrecao: 2,
  indiceConversao: 1
}, {
  id: 40,
  nome: 'Banana Ouro',
  fatorCorrecao: 1.22,
  indiceConversao: 1
}, {
  id: 41,
  nome: 'Banana Prata',
  fatorCorrecao: 1.55,
  indiceConversao: 1
}, {
  id: 42,
  nome: 'Banana da Terra',
  fatorCorrecao: 1.86,
  indiceConversao: 1
}, {
  id: 43,
  nome: 'Bardana',
  fatorCorrecao: 1.51,
  indiceConversao: 1
}, {
  id: 44,
  nome: 'Batata Doce (Cozida)',
  fatorCorrecao: 1.21,
  indiceConversao: 0.96
}, {
  id: 45,
  nome: 'Batata Doce (Frita)',
  fatorCorrecao: 1.46,
  indiceConversao: 0.96
}, {
  id: 46,
  nome: 'Batata Inglesa (Cozida)',
  fatorCorrecao: 1.06,
  indiceConversao: 0.96
}, {
  id: 47,
  nome: 'Batata Inglesa (Frita)',
  fatorCorrecao: 1.22,
  indiceConversao: 0.6
}, {
  id: 48,
  nome: 'Bergamota',
  fatorCorrecao: 1.43,
  indiceConversao: 1
}, {
  id: 49,
  nome: 'Berinjela',
  fatorCorrecao: 1.08,
  indiceConversao: 1.09
}, {
  id: 50,
  nome: 'Beterraba',
  fatorCorrecao: 1.53,
  indiceConversao: 0.9
}];

var _alimentos2 = _interopRequireDefault(_alimentos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlimentometroWrapper = function () {
  function AlimentometroWrapper() {
    _classCallCheck(this, AlimentometroWrapper);
  }

  _createClass(AlimentometroWrapper, null, [{
    key: 'getAlimentos',
    value: function getAlimentos() {
      return _alimentos2.default.map(function (a) {
        return new _alimento2.default(a.id, a.nome, a.fatorCorrecao, a.indiceConversao);
      });
    }
  }, {
    key: 'formata',
    value: function formata() {
      var peso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!peso || peso < 0) {
        return '0g';
      }

      if (peso < 1000) {
        return Math.ceil(peso) + 'g';
      }

      var nf = new Intl.NumberFormat('pt-BR');
      return nf.format(peso / 1000) + 'kg';
    }
  }]);

  return AlimentometroWrapper;
}();

exports.default = AlimentometroWrapper;
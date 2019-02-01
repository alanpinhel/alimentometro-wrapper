'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alimento = require('./alimento');

var _alimento2 = _interopRequireDefault(_alimento);

var _alimentos = [{
  nome: 'Abobrinha',
  fatorCorrecao: 1.26,
  indiceConversao: 0.93
}, {
  nome: 'Alcatra',
  fatorCorrecao: 1.16,
  indiceConversao: 1
}, {
  nome: 'Arroz Integral',
  fatorCorrecao: 1.01,
  indiceConversao: 2.46
}, {
  nome: 'Batata Doce (Cozida)',
  fatorCorrecao: 1.21,
  indiceConversao: 0.96
}, {
  nome: 'Batata Inglesa (Cozida)',
  fatorCorrecao: 1.06,
  indiceConversao: 0.96
}, {
  nome: 'Cenoura',
  fatorCorrecao: 1.16,
  indiceConversao: 0.9
}, {
  nome: 'Chuchu',
  fatorCorrecao: 1.35,
  indiceConversao: 0.9
}, {
  nome: 'Contra Fil\xE9',
  fatorCorrecao: 1.25,
  indiceConversao: 1
}, {
  nome: 'Couve Br\xF3colis',
  fatorCorrecao: 2.56,
  indiceConversao: 0.95
}, {
  nome: 'Couve-flor',
  fatorCorrecao: 2.24,
  indiceConversao: 0.98
}, {
  nome: 'Cox\xE3o Mole',
  fatorCorrecao: 1.05,
  indiceConversao: 1
}, {
  nome: 'Feij\xE3o Carioca',
  fatorCorrecao: 1.05,
  indiceConversao: 1.89
}, {
  nome: 'Patinho',
  fatorCorrecao: 1.14,
  indiceConversao: 1
}, {
  nome: 'Peito de Frango',
  fatorCorrecao: 2.17,
  indiceConversao: 1
}, {
  nome: 'Vagem Manteiga',
  fatorCorrecao: 1.26,
  indiceConversao: 1.02
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
      return _alimentos2.default.map(function (a, i) {
        return new _alimento2.default(i + 1, a.nome, a.fatorCorrecao, a.indiceConversao);
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
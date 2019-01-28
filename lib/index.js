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
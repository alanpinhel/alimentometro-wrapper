'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alimento = require('./alimento');

var _alimento2 = _interopRequireDefault(_alimento);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlimentometroWrapper = function () {
  function AlimentometroWrapper() {
    _classCallCheck(this, AlimentometroWrapper);
  }

  _createClass(AlimentometroWrapper, [{
    key: 'getAlimentos',
    value: function getAlimentos() {
      return require('../data/alimentos.json').map(function (a) {
        return new _alimento2.default(a.id, a.nome, a.fatorCorrecao, a.indiceConversao);
      });
    }
  }]);

  return AlimentometroWrapper;
}();

exports.default = AlimentometroWrapper;
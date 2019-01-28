(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlimentometroWrapper"] = factory();
	else
		root["AlimentometroWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alimento = __webpack_require__(3);

var _alimento2 = _interopRequireDefault(_alimento);

var _alimentos = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"id":1,"nome":"Abacate","fatorCorrecao":1.46,"indiceConversao":1},{"id":2,"nome":"Abacaxi","fatorCorrecao":1.93,"indiceConversao":1},{"id":3,"nome":"Abacaxi Pérola","fatorCorrecao":1.61,"indiceConversao":1},{"id":4,"nome":"Abóbora","fatorCorrecao":1.33,"indiceConversao":1},{"id":5,"nome":"Abóbora Paulista","fatorCorrecao":1.6,"indiceConversao":0.77},{"id":6,"nome":"Abóbora Rabutiã","fatorCorrecao":1.22,"indiceConversao":0.98},{"id":7,"nome":"Abobrinha","fatorCorrecao":1.26,"indiceConversao":1},{"id":8,"nome":"Acelga","fatorCorrecao":1.43,"indiceConversao":1},{"id":9,"nome":"Acém","fatorCorrecao":1.17,"indiceConversao":1},{"id":10,"nome":"Agrião","fatorCorrecao":1.34,"indiceConversao":1},{"id":11,"nome":"Aipo","fatorCorrecao":1.34,"indiceConversao":1},{"id":12,"nome":"Alcachofra","fatorCorrecao":2.08,"indiceConversao":1},{"id":13,"nome":"Alcatra","fatorCorrecao":1.16,"indiceConversao":1},{"id":14,"nome":"Alface Crespa","fatorCorrecao":1.46,"indiceConversao":1},{"id":15,"nome":"Alface Lisa","fatorCorrecao":1.31,"indiceConversao":1},{"id":16,"nome":"Alho","fatorCorrecao":1.08,"indiceConversao":1},{"id":17,"nome":"Alho Poró","fatorCorrecao":1.62,"indiceConversao":1},{"id":18,"nome":"Almeirão","fatorCorrecao":1.12,"indiceConversao":1},{"id":19,"nome":"Ameixa Preta Seca","fatorCorrecao":1.19,"indiceConversao":1},{"id":20,"nome":"Ameixa Rosada","fatorCorrecao":1.11,"indiceConversao":1},{"id":21,"nome":"Ameixa Roxa","fatorCorrecao":1.04,"indiceConversao":1},{"id":22,"nome":"Amêndoa","fatorCorrecao":1.81,"indiceConversao":1},{"id":23,"nome":"Amendoim","fatorCorrecao":2.69,"indiceConversao":1},{"id":24,"nome":"Araçá","fatorCorrecao":1.16,"indiceConversao":1},{"id":25,"nome":"Arenque","fatorCorrecao":1.78,"indiceConversao":1},{"id":26,"nome":"Arroz Integral","fatorCorrecao":1,"indiceConversao":2.46},{"id":27,"nome":"Arroz Parboilizado","fatorCorrecao":1,"indiceConversao":2.33},{"id":28,"nome":"Arroz Polido","fatorCorrecao":1,"indiceConversao":2.33},{"id":29,"nome":"Asa de Frango","fatorCorrecao":2.24,"indiceConversao":1},{"id":30,"nome":"Asa e Sobreasa de Frango","fatorCorrecao":1.81,"indiceConversao":1},{"id":31,"nome":"Aspargo","fatorCorrecao":2,"indiceConversao":1},{"id":32,"nome":"Avelã","fatorCorrecao":2.1,"indiceConversao":1},{"id":33,"nome":"Azeitona","fatorCorrecao":1.28,"indiceConversao":1},{"id":34,"nome":"Azeitona Verde em Conserva","fatorCorrecao":1.4,"indiceConversao":1},{"id":35,"nome":"Bacalhau","fatorCorrecao":2.52,"indiceConversao":1},{"id":36,"nome":"Bacon","fatorCorrecao":1,"indiceConversao":0.22},{"id":37,"nome":"Banana D'Água","fatorCorrecao":1.66,"indiceConversao":1},{"id":38,"nome":"Banana Maçã","fatorCorrecao":1.53,"indiceConversao":1},{"id":39,"nome":"Banana Nanica / Catuarra","fatorCorrecao":2,"indiceConversao":1},{"id":40,"nome":"Banana Ouro","fatorCorrecao":1.22,"indiceConversao":1},{"id":41,"nome":"Banana Prata","fatorCorrecao":1.55,"indiceConversao":1},{"id":42,"nome":"Banana da Terra","fatorCorrecao":1.86,"indiceConversao":1},{"id":43,"nome":"Bardana","fatorCorrecao":1.51,"indiceConversao":1},{"id":44,"nome":"Batata Doce (Cozida)","fatorCorrecao":1.21,"indiceConversao":0.96},{"id":45,"nome":"Batata Doce (Frita)","fatorCorrecao":1.46,"indiceConversao":0.96},{"id":46,"nome":"Batata Inglesa (Cozida)","fatorCorrecao":1.06,"indiceConversao":0.96},{"id":47,"nome":"Batata Inglesa (Frita)","fatorCorrecao":1.22,"indiceConversao":0.6},{"id":48,"nome":"Bergamota","fatorCorrecao":1.43,"indiceConversao":1},{"id":49,"nome":"Berinjela","fatorCorrecao":1.08,"indiceConversao":1.09},{"id":50,"nome":"Beterraba","fatorCorrecao":1.53,"indiceConversao":0.9}]

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alimento = function () {
  function Alimento(id, nome, fatorCorrecao, indiceConversao) {
    _classCallCheck(this, Alimento);

    this.id = id;
    this.nome = nome;
    this.fatorCorrecao = fatorCorrecao;
    this.indiceConversao = indiceConversao;
  }

  _createClass(Alimento, [{
    key: "pesoBruto",
    get: function get() {
      return +(1 / this.indiceConversao * this.fatorCorrecao).toFixed(3);
    }
  }]);

  return Alimento;
}();

exports.default = Alimento;

/***/ })
/******/ ]);
});
//# sourceMappingURL=alimentometro-wrapper.umd.js.map
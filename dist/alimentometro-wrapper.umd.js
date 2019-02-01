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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"nome":"Abobrinha","fatorCorrecao":1.26,"indiceConversao":0.93},{"nome":"Alcatra","fatorCorrecao":1.16,"indiceConversao":1},{"nome":"Arroz Integral","fatorCorrecao":1.01,"indiceConversao":2.46},{"nome":"Batata Doce (Cozida)","fatorCorrecao":1.21,"indiceConversao":0.96},{"nome":"Batata Inglesa (Cozida)","fatorCorrecao":1.06,"indiceConversao":0.96},{"nome":"Cenoura","fatorCorrecao":1.16,"indiceConversao":0.9},{"nome":"Chuchu","fatorCorrecao":1.35,"indiceConversao":0.9},{"nome":"Contra Filé","fatorCorrecao":1.25,"indiceConversao":1},{"nome":"Couve Brócolis","fatorCorrecao":2.56,"indiceConversao":0.95},{"nome":"Couve-flor","fatorCorrecao":2.24,"indiceConversao":0.98},{"nome":"Coxão Mole","fatorCorrecao":1.05,"indiceConversao":1},{"nome":"Feijão Carioca","fatorCorrecao":1.05,"indiceConversao":1.89},{"nome":"Patinho","fatorCorrecao":1.14,"indiceConversao":1},{"nome":"Peito de Frango","fatorCorrecao":2.17,"indiceConversao":1},{"nome":"Vagem Manteiga","fatorCorrecao":1.26,"indiceConversao":1.02}]

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
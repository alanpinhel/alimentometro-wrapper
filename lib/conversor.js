'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = converteParaPesagemHumana;
var intl = require('intl');

function converteParaPesagemHumana(peso) {
  if (!peso) {
    return '0g';
  }

  if (peso < 1000) {
    return Math.ceil(peso) + 'g';
  }

  var pesoEmKg = intl.NumberFormat('pt').format(peso / 1000);
  return pesoEmKg + 'kg';
}
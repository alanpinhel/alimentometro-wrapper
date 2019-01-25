import {
  getAlimentos,
  getAlimentoPorId,
  getAlimentosComNomeIniciadoPor,
} from './alimentos';

import {
  getPesoBrutoAlimentoPorId,
} from './alimento';

import {
  converteParaPesagemHumana,
} from './conversor';

module.exports = {
  getAlimentos,
  getAlimentoPorId,
  getAlimentosComNomeIniciadoPor,
  getPesoBrutoAlimentoPorId,
  converteParaPesagemHumana,
};

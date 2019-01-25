import { getAlimentoPorId } from './alimentos';

export default function getPesoBrutoAlimentoPorId(id) {
  const alimento = getAlimentoPorId(id);
  const umGrama = 1;
  return +((umGrama / alimento.indiceConversao) * alimento.fatorCorrecao).toFixed(3);
}

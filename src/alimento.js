import { getAlimentoPorId } from './alimentos';

export const getPesoBrutoAlimentoPorId = id => {
  const alimento = getAlimentoPorId(id);
  return + (1 / alimento.indiceConversao * alimento.fatorCorrecao).toFixed(3);
};

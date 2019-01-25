/* eslint-disable global-require */
export const getAlimentos = () => require('./alimentos.json');

export const getAlimentoPorId = id => getAlimentos().find(a => a.id === id);

export const getAlimentosComNomeIniciadoPor = termo =>
  getAlimentos().filter(a => a.nome.startsWith(termo));

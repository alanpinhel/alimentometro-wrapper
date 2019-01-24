let intl = require('intl');

export const converteParaPesagemHumana = peso => {
  if (!peso) {
    return '0g';
  }

  if (peso < 1000) {
    return `${Math.ceil(peso)}g`;
  }

  const pesoEmKg = intl.NumberFormat('pt').format(peso / 1000);
  return `${pesoEmKg}kg`;
};

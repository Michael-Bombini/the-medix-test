//Scrivere una funzione che in input accetti un parametro y (numero) e restituisca la somma da 1 ad y.

const y = 15;

const sumNumbers = (y) => {
  let sum = 0;
  for (let i = 1; i <= y; i++) sum += i;
  return sum;
};

const result = sumNumbers(y);
console.log(result);

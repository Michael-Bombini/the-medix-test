// Cos’è il this in JavaScript?

/*
Il this in javascript è una keyword che fa riferimento ad un oggetto che cambia il suo contesto in base a dove viene invocato
se viene invocato globalmente il this ci restituisce l'object Window
se viene invocato all'interno di un event listener ci restituira l'elemento a cui facciamo riferimento
se viene invocato all'interno di un metodo di un oggetto il this fa riferimento alle sue proprietà 

*/

console.log(this);

document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});

const user = {
  name: "mario",
  surname: "rossi",
  age: 50,
  getData: function () {
    return `Name ${this.name} Surname ${this.surname} Age ${this.age} `;
  },
};

const utente = user.getData();
console.log(utente);

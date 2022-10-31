//Nel seguente codice, perchè anche il name del primo oggetto nell’array users cambia nome in ‘Mario’?

/*
Spiegazione : 
Nel codice accade questo perché in javascript i tipi di dato array e objects a differenza degli altri (Number, boolean , stringhe )
sono dei dati di tipo Reference ossia all'assegnamento della variabile nel nostro caso ad user1 non otterremo i dati normali 
ma un riferimento a user[0].


Soluzione : 
Proprio per questo si deve far uso dello spread operator
Lo spread operator permette di estrarre dei dati da un array o oggetto 
nel nostro caso user[0] si fa riferimento ad un oggetto quindi utilizziamo lo spread operator per ottenere tutte le sue proprietà 

let user1 = { ...users[0] };



*/

let users = [
  {
    name: "Albert",
    surname: "Williams",
    age: 28,
  },
  {
    name: "Max",
    surname: "Smith",
    age: 35,
  },
  {
    name: "Angel",
    surname: "Freed",
    age: 23,
  },
  {
    name: "Luis",
    surname: "Red",
    age: 33,
  },
];

let user1 = { ...users[0] };
user1.name = "Mario";

console.log(user1);
console.log(users[0]);

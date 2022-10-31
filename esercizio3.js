const fruits = ["apple", "orange", "banana", "pineapple", "kiwi"];

const filterWordsLength = () => {
  const fruitsFive = fruits.filter((word) => {
    return word.length > 5;
  });
  return fruitsFive;
};

const filterWordsUppercase = () => {
  return fruits.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
};

const fruitsFive = filterWordsLength();
console.log(fruitsFive);

const fruitsUpper = filterWordsUppercase();
console.log(fruitsUpper);

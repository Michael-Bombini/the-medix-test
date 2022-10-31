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

const getUsersNames = () => {
  return users.map((user) => {
    return user.name;
  });
};

const getUsersAgeAvg = () => {
  let total = 0;
  const ages = users.forEach((user) => {
    total += user.age;
  });
  return total / users.length;
};

const usersNames = getUsersNames();
console.log(usersNames);
const usersAgeAverage = getUsersAgeAvg();
console.log(usersAgeAverage);

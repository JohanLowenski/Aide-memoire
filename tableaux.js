// .forEach() - permet de parcourir un tableau
const emojis = ["🔥", "🏈 ", "🗽", "🐕"];
emojis.forEach((el, index, array) => console.log(el, index, array));
//Autre méthode
emojis.forEach((el) => {
  return console.log(el);
});

// .map()- renvoie un nouveau tableau
const users = [
  { name: "John", age: 20 },
  { name: "Peter", age: 30 },
  { name: "Mary", age: 40 },
];
const ages = users.map((user) => user.age);
console.log(ages);

/* 
   .find() - retourne le premier élément trouvé 
   .findIndex() - retourne l'index du premier élément trouvé 
   .indexOf() - retourne l'index du premier élément trouvé
*/
const fruits = ["🍎", "🍑", "🍓", "🍈", "🍇"];
console.log(fruits.find((el) => el === "🍎"));
console.log(fruits.findIndex((el) => el === "🍑"));
console.log(fruits.indexOf("🍇"));

/*
  .some() - retourne true si au moins un élément respecte la condition
  .every()- retourne true si tous les éléments respectent la condition
  .includes() - retourne true si l'élément existe dans le tableau
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some((el) => el > 3)); //Au moins un élément est supérieur à (3) retourne true
console.log(numbers.every((el) => el === 1)); //Tous les éléments sont égaux à (1) retourne false
console.log(numbers.includes(5)); //Retourne true si l'élément existe dans le tableau sinon false

// .filter() - retourne un nouveau tableau contenant les éléments qui respectent la condition
const salaries = [1000, 2000, 3000, 4000, 5000];
const filteredSalaries = salaries.filter((el) => el > 3000); //Retourne un tableau contenant les éléments supérieurs à (3000)
console.log(filteredSalaries);

// .sort() - trie un tableau
const marks = [15, 7, 12, 11, 17, 14];
const letters = ["z", "b", "a"];
marks.sort((a, b) => a - b); // Ou const sortedMark = mark.sort((a, b) => a - b); //Trie le tableau par ordre croissant
letters.sort(); //Trie le tableau par ordre alphabétique (Méthode utilisé pour effectuer la comparaison : utilise le code Utf-16)
console.log(marks);
console.log(letters);

// .reduce() - retourne une valeur
//accumulateur - valeur qui est accumulée
//currentValue - valeur courante
const average = (marks.reduce((acc, curr) => acc + curr) / marks.length).toFixed(2); //Retourne la moyenne des notes 2 chiffres après la virgule
console.log(average);

// .reverse() - inverse le sens d'un tableau
// .slice() -   retourne un nouveau tableau
// .splice() - modifie un tableau
// .concat() - retourne un nouveau tableau
// .join() - retourne une chaîne de caractères
// .split() - retourne un tableau
// .indexOf() - retourne l'index d'un élément
// .lastIndexOf() - retourne l'index d'un élément
// .toString() - retourne une chaîne de caractères
// .toLocaleString() - retourne une chaîne de caractères
// .toLocaleDateString() - retourne une chaîne de caractères
// .toLocaleTimeString() - retourne une chaîne de caractères
// .toUTCString() - retourne une chaîne de caractères
// .toDateString() - retourne une chaîne de caractères
// .toTimeString() - retourne une chaîne de caractères
// .toISOString() - retourne une chaîne de caractères
// .toJSON() - retourne une chaîne de caractères
// .valueOf() - retourne une valeur

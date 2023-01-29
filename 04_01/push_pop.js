const drinks = ["coffee", "tea", "soda", "water"];
//How do we add "wine" to the array of drinks?

const seasons = ["spring", "summer", "fall", "winter"];
//How do we remove the last season from the seasons array?
drinks.push("wine");
console.log(drinks);

//Store the element that is removed in a variable.
const poppedValue = seasons.pop();
console.log(poppedValue);
console.log(seasons);

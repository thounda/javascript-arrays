const condiments = ["ketchup", "mustard", "relish", "mayo"];
// Use reverse to change the order of this array.
console.log(condiments.reverse());

const employees = ["Adams", "Carter", "Davis", "Fraklin", "Zappa"];
// Use reverse to change the order of this array,
// but keep the original array intact.
const reverse = [...employees];
console.log(`Reversed: `, reverse.reverse());
console.log(`Original`, employees);

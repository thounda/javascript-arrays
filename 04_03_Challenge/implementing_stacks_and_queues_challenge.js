//Push, Pop, Unshift, and Shift

const foods = [
  { food: "raspberries", type: "fruit" },
  { food: "orange", type: "fruit" },
  { food: "broccoli", type: "vegetable" },
  { food: "quinoa", type: "grain" },
];
const blackBeans = { food: "black beans", type: "legume" };
const chiaSeeds = { food: "chia seeds", type: "seed" };

//Challenge Question #1
//Remove the last item in the foods array.
foods.pop();
console.log(`Popper`, foods);

//Challenge Question #2
//Remove the first item in the foods array.
foods.shift();
console.log(`Shifted Foods array`, foods);

//Challenge Question #3
//Add the variable blackBeans to the beginning of the foods array.
foods.unshift(blackBeans);
console.log(`Unshifted`, foods);

//Challenge Question #4
//Add the variable chiaSeeds to the end of the array.
foods.push(chiaSeeds);
console.log(`Final Array`, foods);

//What does your final array look like?

const foods = [
  {
    name: "Cheesy Omelette",
    type: "breakfast",
    ingredients: {
      egg: 2,
      cheese: 30,
      milk: 50,
    },
  },
  {
    name: "Tomato Pasta",
    type: "main",
    ingredients: {
      flour: 100,
      tomato: 80,
      cheese: 20,
    },
  },
  {
    name: "Cheese Pizza",
    type: "main",
    ingredients: {
      flour: 150,
      cheese: 50,
      tomato: 60,
    },
  },
  {
    name: "French Toast",
    type: "snack",
    ingredients: {
      flour: 60,
      egg: 1,
      milk: 80,
    },
  },
  {
    name: "Scrambled Eggs",
    type: "breakfast",
    ingredients: {
      egg: 3,
      milk: 30,
    },
  },
];


const caloriesPerIngredient = {
  flour: 3.6, // per gram
  egg: 78, // per egg
  milk: 0.6, // per gram (e.g. ~60 cal per 100g)
  cheese: 4, // per gram
  tomato: 0.2, // per gram
};
//----------------------------نوع غذا رو بگیره-
const breakfastOnly = (type) => {
  return foods
    .filter((food) => {
      return food.type === type;
    })
    .map((food) => food.name);
};
console.log(breakfastOnly("breakfast"));

const findFoods = foods
  .filter((food) => {
    return food.type === "breakfast";
  })
  .map((food) => food.name);
console.log(findFoods);

//-------------------------------اسم غذارو بگیره و مواداولیه اش رو برگردونه
const getFoodIngredients = (name) => {
  return (
    foods
      .filter((food) => {
        return food.name === name;
      })
      .map((food) => Object.keys(food.ingredients))[0] || []
  );
};
console.log(getFoodIngredients("Cheese Pizza"));
console.log(getFoodIngredients("Scrambled Eggs"));
console.log(getFoodIngredients("Scrambled"));


const getCalories = (name) => {
  const food =
    foods
      .filter((food) => {
        return food.name === name;
      })
      .map((food) => Object.entries(food.ingredients)) || [];

  console.log(food);
  console.log(food[0]);

  

  const bb = food[0].reduce((acc, cur) => {
    console.log(cur[1]);
    console.log(caloriesPerIngredient[cur[0]]);
    return acc + cur[1] * caloriesPerIngredient[cur[0]];
  }, 0);

  return bb;
};
console.log(getCalories("Scrambled Eggs"));


const getCalories1 = (name) => {
  const food =
    foods
      .filter((food) => {
        return food.name === name;
      }) || [];

  console.log(food);

  const bb = food.reduce((acc, cur) => {
    console.log(Object.values(cur.ingredients));
    console.log(Object.values(cur.ingredients));
    return acc + cur[1] * caloriesPerIngredient[cur[0]];
  }, 0);

  return bb;
};
console.log(getCalories1("Scrambled Eggs"));


const getFoodByIng = (ingName) => {
  return     foods
      .filter((food) => {
        console.log(food.ingredients[ingName])
        return Object.keys(food.ingredients).some((ing) => ing === ingName );
        // return Object.keys(food.ingredients).includes(ingName);
        // return food.ingredients[ingName];
      })
      .map((food) => food.name);
}
console.log(getFoodByIng("egg"))
console.log(getFoodByIng("egg1"))


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
  test: 78
};

//------------چک کردن برابر بودت ریفرنس ها
const foods1 = foods;
const foods2 = [...foods];
console.log(foods1 === foods)
console.log(foods2 === foods)

//----------------------------نوع غذا رو بگیرد و غذاهایی که برابر نوع ورودی هستند را برگرداند-
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
    foods.filter((food) => {
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


//همه غذاهایی که توش تخم مرغ هست را بده
const getFoodByIng = (ingName) => {
  return foods
    .filter((food) => {
    //   console.log(Object.entries(food.ingredients));
    //   return Object.entries(food.ingredients).find(
    //     ([key, vlaue]) => key === ingName
    //   );
      // return Object.keys(food.ingredients).some((ing) => ing === ingName );
      // return Object.keys(food.ingredients).includes(ingName);
      return food.ingredients[ingName];
    })
    .map((food) => food.name);
};
console.log(getFoodByIng("egg"));
console.log(getFoodByIng("egg1"))

//اولین غذایی که توش تخم مرغ هست را بده
const getFoodByIng1 = (ingName) => {
    return foods
    .find((food) => {
      console.log(Object.entries(food.ingredients));
      return Object.entries(food.ingredients).find(
          ([key, vlaue]) => key === ingName
        );
        // return Object.keys(food.ingredients).some((ing) => ing === ingName );
        // return Object.keys(food.ingredients).includes(ingName);
        //   return food.ingredients[ingName];
    })
};
console.log(getFoodByIng1("egg"));
console.log(getFoodByIng("egg1"))



console.log(Object.entries(caloriesPerIngredient))
const vv = Object.entries(caloriesPerIngredient).find(([key,value]) => {
    console.log(value)
    return value === 78
})
console.log(vv)


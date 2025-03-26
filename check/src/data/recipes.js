import { v4 as uuidv4 } from "uuid"

export const initialRecipes = [
  {
    id: uuidv4(),
    name: "Greek Salad",
    ingredients: [
      { name: "tomatoes", amount: "3" },
      { name: "cucumber", amount: "1" },
      { name: "onion", amount: "1" },
      { name: "olives", amount: "20" },
      { name: "feta", amount: "150g" },
    ],
    desc: "Способ приготовления",
  },
  {
    id: uuidv4(),
    name: "Hawaiian Pizza",
    ingredients: [
      { name: "pizza crust", amount: "1" },
      { name: "pizza sauce", amount: "100ml" },
      { name: "mozzarella", amount: "200g" },
      { name: "ham", amount: "150g" },
      { name: "pineapple", amount: "100g" },
    ],
    desc: "Способ приготовления",
  },
  // {
  //   id: uuidv4(),
  //   name: "Vegetable Stir Fry",
  //   ingredients: [
  //     { name: "carrot", amount: "2" },
  //     { name: "bell pepper", amount: "1" },
  //     { name: "broccoli", amount: "1" },
  //     { name: "soy sauce", amount: "30ml" },
  //     { name: "garlic", amount: "2 cloves" },
  //   ],
  //   desc: "Способ приготовления",
  // },
  // {
  //   id: uuidv4(),
  //   name: "Chocolate Cake",
  //   ingredients: [
  //     { name: "flour", amount: "200g" },
  //     { name: "sugar", amount: "150g" },
  //     { name: "cocoa powder", amount: "50g" },
  //     { name: "eggs", amount: "3" },
  //     { name: "butter", amount: "100g" },
  //   ],
  //   desc: "Способ приготовления",
  // },
]

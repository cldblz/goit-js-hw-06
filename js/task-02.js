const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const ingredientRef = document.createElement("li")
  ingredientRef.textContent = ingredient
  ingredientRef.classList.add("item")
  return ingredientRef
})

const listRef = document.querySelector("#ingredients")
listRef.append(...elements)
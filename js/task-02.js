// Масив інгредієнтів
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const listItemRef = document.createElement("li");

  listItemRef.textContent = ingredient;

  listItemRef.classList.add("item");

  ingredientsListRef.appendChild(listItemRef);
});

// const listItems = ingredients.map((ingredient) => {
//   const listItemRef = document.createElement("li");

//   listItemRef.textContent = ingredient;

//   listItemRef.classList.add("item");

//   return listItemRef;
// });

// ingredientsListRef.append(...listItems);

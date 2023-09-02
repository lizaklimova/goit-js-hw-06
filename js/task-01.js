const ulCategoryRef = document.querySelector("#categories");

const liItems = ulCategoryRef.children;

const arr = [...liItems];

console.log(`Number of categories: ${liItems.length}`);

arr.forEach((el) => {
  const liCategoryText = el.querySelector("h2").textContent;

  const subLiRef = el.querySelectorAll("ul li").length;

  console.log("Category:", liCategoryText);
  console.log("Element:", subLiRef);
});

//! Доступ до списку
const ulCategoryRef = document.querySelector("#categories");

//! Доступ до ел гол.списку
const liItemsRef = ulCategoryRef.querySelectorAll(".item");

console.log(`Number of categories: ${liItemsRef.length}`);

liItemsRef.forEach((el) => {
  const liCategoryText = el.querySelector("h2").textContent;

  const subLiRef = el.querySelectorAll("ul li").length;

  console.log("Category:", liCategoryText);
  console.log("Element:", subLiRef);
});

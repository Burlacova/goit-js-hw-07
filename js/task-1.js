const categoriesList = document.getElementById("categories");

const categoriesItem = document.querySelectorAll("li.item");

console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((item) => {
	const title = item.querySelector("h2").textContent;
	const subItem = item.querySelectorAll("li");
	console.log(`Category: ${title}`);
	console.log(`Elements: ${subItem.length}`);
});

const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const imageContainer = document.querySelector(".gallery");

function createGallety(images, container) {
	const html = images
		.map(
			(image) =>
				`<li class= 'gallery-item'>
    <img class='gallery-img' src="${image.url}" alt="${image.alt} ">
  </li>`
		)
		.join(" ");

	container.insertAdjacentHTML("beforeend", html);
}
createGallety(images, imageContainer);

/* function makeImageItems(imagess) {
	return imagess.map((image) => {
		const imageEl = document.createElement("img");
		imageEl.classList.add("img");
		imageEl.src = image.url;
		imageEl.alt = image.alt;

		return imageEl;
	});
}
const elements = makeImageItems(images);
imageContainer.append(...elements); */

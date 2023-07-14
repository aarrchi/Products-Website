const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    console.log(products);
    return products;
    
  } catch (error) {
    console.log(error);
  }
};

getProducts().then((products) => {
  products.forEach((prod) => {
    const container = document.getElementById("container");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "m-4", "fit-content");
    cardDiv.style.width = "21rem";
    cardDiv.style.height = "450px";

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = prod.thumbnail;
    cardImage.style.height = "300px";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = prod.title;

    const cardP = document.createElement("p");
    cardP.className = "card-text";
    cardP.textContent =
      prod.description.length > 40
        ? prod.description.slice(0, 30) + "..."
        : prod.description;

    const cardButton = document.createElement("button");
    cardButton.classList.add("btn", "btn-primary", "btn-sm");
    cardButton.innerText = "View Details";

    container.appendChild(cardDiv);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardP);
    cardBody.appendChild(cardButton);
  });
}).catch((error) => {
    console.log(error);
});

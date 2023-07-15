let backendProds = [];

const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    //console.log(products);
    return products;
  } catch (error) {
    console.log(error);
  }
};

getProducts()
  .then((products) => {
    backendProds = products;
    filteredProducts(backendProds);
  })
  .catch((error) => {
    console.log(error);
  });

function filteredProducts(backendProds) {
  console.log("backe", backendProds);
  document.getElementById("container").innerHTML = "";

  //console.log(backendProds);
  //console.log(products);
  backendProds.forEach((prod) => {
    console.log(prod);
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

    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.classList.add("btn", "btn-primary", "btn-sm", "mt-2");
    viewDetailsButton.innerText = "View Details";

    viewDetailsButton.setAttribute("data-bs-toggle", "modal");
    viewDetailsButton.setAttribute("data-bs-target", "#view-details");
    viewDetailsButton.addEventListener("click", (event) => {
      document.getElementById("prod-img-details").src = prod.thumbnail;
      document.getElementById("prod-name-details").value = prod.title;
      document.getElementById("prod-description-details").value =
        prod.description;
    });

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-secondary", "btn-sm", "ms-3", "mt-2");
    editButton.innerText = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2", "mt-2");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(prod.id);

      backendProds = backendProds.filter((val) => {
        if (val.id !== prod.id) {
          return val;
        }
      });
      //console.log(backendProds);
      filteredProducts(backendProds);
    });

    container.appendChild(cardDiv);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardP);
    cardBody.appendChild(viewDetailsButton);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);
  });

  const addBTN = document.getElementById("add-button");
  addBTN.addEventListener("click", (event) => {
    console.log("clciked");

    const title = document.getElementById("prod-name").value;
    const thumbnail = document.getElementById("prod-image").value;
    const description = document.getElementById("prod-description").value;

    const data = {
      id: Date.now(),
      title,
      thumbnail,
      description,
    };

    //backendProds.push(data);
    //filteredProducts(backendProds);
    //OR

    const newProds = [data, ...backendProds];
    filteredProducts(newProds);
    document.getElementById("close-btn").click();
  });
}

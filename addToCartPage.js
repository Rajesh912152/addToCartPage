let rowContainerEl = document.getElementById("cartRow");
rowContainerEl.classList.add("cart");

let cartHeading = document.createElement("h1");
cartHeading.textContent = "Add To Cart";
//cartHeading.classList.add("cart");
rowContainerEl.appendChild(cartHeading);

let inputContainerElement = document.createElement("div");
inputContainerElement.classList.add("d-flex", "flex-row", "justify-content-center");
rowContainerEl.appendChild(inputContainerElement);

let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "inputElementId";
inputContainerElement.appendChild(inputElement);

let buttonElement = document.createElement("button");
buttonElement.classList.add("btn", "btn-primary", "btn-add");
buttonElement.textContent = "Add";
buttonElement.id = "buttonId";
inputContainerElement.appendChild(buttonElement);

let listContainer = document.createElement("div");
rowContainerEl.appendChild(listContainer);

let listContainerHeading = document.createElement("h4");
listContainerHeading.textContent = "My Cart Items";
listContainerHeading.classList.add('list-title');
listContainer.appendChild(listContainerHeading);

buttonElement.onclick = function() {
    let list = document.createElement("li");
    list.classList.add("list");
    list.textContent = inputElement.value;

    listContainerHeading.appendChild(list);

    inputElement.value = "";
};
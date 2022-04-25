let elInput = document.querySelector(".product-input");
let elForm = document.querySelector(".form");
let elClearBtn = document.querySelector(".clear-btn");
let elList = document.querySelector(".products-list");
let elCheck = document.querySelector(".product-check");
let productList = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let checkActive = elCheck.checked;
  let itemlist = elInput.value.trim();
  if (itemlist.length > 10 || itemlist == "" || !isNaN(itemlist) || itemlist.length < 2) {
    elInput.setAttribute("style", "border-color: red");
    return;
  }
  elInput.setAttribute("style", "border-color: black");
  if (checkActive) {
    productList.unshift(itemlist);
  }
  else{
  productList.push(itemlist);
  }
  elList.innerHTML = null;
  for (let product of productList) {
    let newLi = document.createElement("li");
    newLi.textContent = product;
    newLi.setAttribute("class", " p-2 w-100 rounded-pill  text-capitalize fw-bold")
    elList.appendChild(newLi);
  }
  elInput.value = null;

} )


elClearBtn.addEventListener("click", function (evt) {
  elList.innerHTML = null
})
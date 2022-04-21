
let elInput = document.querySelector (".product-input");
let elForm = document.querySelector (".form");
let elClearBtn = document.querySelector (".clear-btn");
let elList = document.querySelector (".products-list");
let productList = [];

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  let itemlist = elInput.value.trim();
  if( itemlist.length > 10 || itemlist == "" || !isNaN(itemlist) || itemlist.length < 2){
    elInput.value = "";
    elInput.style="border-color: red";
    return;
  }
  elInput.style="border-color: black";
  productList.push(itemlist);
  elList.innerHTML = null;
  for (let product of productList) {
    let newLi = document.createElement("li");
    newLi.textContent = product;
    elList.appendChild(newLi);
  }
  elInput.value = null;
})
elClearBtn.addEventListener("click", function(evt){
  elList.innerHTML = null
})
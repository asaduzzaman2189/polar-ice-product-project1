/* const requirementBox = parseFloat(document.getElementById("box-1").value);
const previousQuantityItem = parseFloat(
  document.getElementById("quantity-1").innerText
);
const updateQuantityItem.innerText= requirementBox*previousQuantityItem;
console.log(updateQuantityItem); */

/* document.getElementById("box-1").addEventListener("change", function () {
    console.log("You selected: ", this.value);
}); */

document.getElementById("box-1").addEventListener("change", function () {
  requirementValue = this.value;

  const previousQuantityText = document.getElementById("quantity-1");
  previousQuantityText.innerText = requirementValue * 12;
  const totalItemQuantity = parseInt(previousQuantityText.innerText);
  //   console.log(totalItemQuantity);
});

const itemPrice = document.getElementById("item-price-1");
const previousItemPriceText = itemPrice.innerText;
const previousItemPriceValue = parseFloat(previousItemPriceText);
console.log(previousItemPriceValue);

const boxPrice = document.getElementById("box-price-1");
const previousBoxPriceText = boxPrice.innerText;
const previousBoxPriceValue = parseFloat(previousBoxPriceText);

const totalItemPrice = previousItemPriceValue + previousBoxPriceValue;
// itemPrice.innerText = totalItemPrice;
// console.log(itemPrice.innerText);

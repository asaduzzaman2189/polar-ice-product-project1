/* 
document.getElementById("box-1").addEventListener("change", function () {
  const itemQuantity = document.getElementById("quantity-1");
  itemQuantity.innerText = this.value * 12;

  const totalItemPrice = parseFloat(this.value) * boxPriceValue;
  itemPrice.innerText = totalItemPrice;
});

const itemPrice = document.getElementById("item-price-1");
const boxPrice = document.getElementById("box-price-1");

const previousBoxPriceText = boxPrice.innerText;
const boxPriceValue = parseFloat(previousBoxPriceText);

 */

document.getElementById("box-1").addEventListener("change", function () {
  const itemQuantity = document.getElementById("quantity-1");
  itemQuantity.innerText = this.value * 12;

  const totalItemPrice = parseFloat(this.value) * boxPriceValue;
  itemPrice.innerText = totalItemPrice;
});

const itemPrice = document.getElementById("item-price-1");
const boxPrice = document.getElementById("box-price-1");

const previousBoxPriceText = boxPrice.innerText;
const boxPriceValue = parseFloat(previousBoxPriceText);

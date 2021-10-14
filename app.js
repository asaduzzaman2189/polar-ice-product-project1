
// box(n) function korte hobe-

document.getElementById("box-1").addEventListener("change", function () {
  const quantityText = document.getElementById("quantity-1");
  const boxPrice = document.getElementById("box-price-1");
  const itemQuantity = document.getElementById("total-quantity-1");
  const itemPrice = document.getElementById("item-price-1");

  const quantityValue = parseInt(quantityText.innerText);
  itemQuantity.innerText = this.value * quantityValue;

  const previousBoxPriceText = boxPrice.innerText;
  const boxPriceValue = parseFloat(previousBoxPriceText);

  const totalItemPrice = parseFloat(this.value) * boxPriceValue;
  itemPrice.innerText = totalItemPrice;
});

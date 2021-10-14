function box(n, quantity) {
  console.log(n, quantity);

  const quantityText = document.getElementById("quantity-" + n);
  const boxPrice = document.getElementById("box-price-" + n);
  const itemQuantity = document.getElementById("total-quantity-" + n);
  const itemPrice = document.getElementById("item-price-" + n);

  const getTotalQuantity = document.getElementById("total-quantity-14");
  const getTotalItemPrice = document.getElementById("item-price-14");
  const getDiscount = document.getElementById("item-price-15");
  const payableToPolar = document.getElementById("item-price-16");

  const quantityValue = parseInt(quantityText.innerText);
  itemQuantity.innerText = quantity * quantityValue;
  console.log(itemQuantity.innerText);

  const previousBoxPriceText = boxPrice.innerText;
  const boxPriceValue = parseInt(previousBoxPriceText);
  console.log(boxPriceValue);

  const totalItemPrice = parseInt(quantity) * boxPriceValue;
  itemPrice.innerText = totalItemPrice;
  console.log(itemPrice.innerText);

  getTotalQuantity.innerText = updateTotalItemQuantity();
  getTotalItemPrice.innerText = updateTotalItemPrice();

  function discount() {
    const discount15 = parseFloat(getTotalItemPrice.innerText) * 0.15;
    return discount15;
  }

  function payable() {
    const pay =
      parseFloat(getTotalItemPrice.innerText) -
      parseFloat(getDiscount.innerText);
    return pay;
  }

  getDiscount.innerText = discount();
  payableToPolar.innerText = payable();
}

function updateTotalItemQuantity() {
  const totalQuantity1 = parseInt(
    document.getElementById("total-quantity-1").innerText
  );
  const totalQuantity2 = parseInt(
    document.getElementById("total-quantity-2").innerText
  );
  const totalQuantity3 = parseInt(
    document.getElementById("total-quantity-3").innerText
  );
  const totalQuantity4 = parseInt(
    document.getElementById("total-quantity-4").innerText
  );
  const totalQuantity5 = parseInt(
    document.getElementById("total-quantity-5").innerText
  );
  const totalQuantity6 = parseInt(
    document.getElementById("total-quantity-6").innerText
  );
  const totalQuantity7 = parseInt(
    document.getElementById("total-quantity-7").innerText
  );
  const totalQuantity8 = parseInt(
    document.getElementById("total-quantity-8").innerText
  );
  const totalQuantity9 = parseInt(
    document.getElementById("total-quantity-9").innerText
  );
  const totalQuantity10 = parseInt(
    document.getElementById("total-quantity-10").innerText
  );
  const totalQuantity11 = parseInt(
    document.getElementById("total-quantity-11").innerText
  );
  const totalQuantity12 = parseInt(
    document.getElementById("total-quantity-12").innerText
  );
  const totalQuantity13 = parseInt(
    document.getElementById("total-quantity-13").innerText
  );

  return (
    totalQuantity1 +
    totalQuantity2 +
    totalQuantity3 +
    totalQuantity4 +
    totalQuantity5 +
    totalQuantity6 +
    totalQuantity7 +
    totalQuantity8 +
    totalQuantity9 +
    totalQuantity10 +
    totalQuantity11 +
    totalQuantity12 +
    totalQuantity13
  );
}

function updateTotalItemPrice() {
  const totalItemPrice1 = parseInt(
    document.getElementById("item-price-1").innerText
  );
  const totalItemPrice2 = parseInt(
    document.getElementById("item-price-2").innerText
  );
  const totalItemPrice3 = parseInt(
    document.getElementById("item-price-3").innerText
  );
  const totalItemPrice4 = parseInt(
    document.getElementById("item-price-4").innerText
  );
  const totalItemPrice5 = parseInt(
    document.getElementById("item-price-5").innerText
  );
  const totalItemPrice6 = parseInt(
    document.getElementById("item-price-6").innerText
  );
  const totalItemPrice7 = parseInt(
    document.getElementById("item-price-7").innerText
  );
  const totalItemPrice8 = parseInt(
    document.getElementById("item-price-8").innerText
  );
  const totalItemPrice9 = parseInt(
    document.getElementById("item-price-9").innerText
  );
  const totalItemPrice10 = parseInt(
    document.getElementById("item-price-10").innerText
  );
  const totalItemPrice11 = parseInt(
    document.getElementById("item-price-11").innerText
  );
  const totalItemPrice12 = parseInt(
    document.getElementById("item-price-12").innerText
  );
  const totalItemPrice13 = parseInt(
    document.getElementById("item-price-13").innerText
  );

  return (
    totalItemPrice1 +
    totalItemPrice2 +
    totalItemPrice3 +
    totalItemPrice4 +
    totalItemPrice5 +
    totalItemPrice6 +
    totalItemPrice7 +
    totalItemPrice8 +
    totalItemPrice9 +
    totalItemPrice10 +
    totalItemPrice11 +
    totalItemPrice12 +
    totalItemPrice13
  );
}

document.getElementById("box-1").addEventListener("change", function () {
  box(1, parseInt(this.value));
});

document.getElementById("box-2").addEventListener("change", function () {
  box(2, parseInt(this.value));
});

document.getElementById("box-3").addEventListener("change", function () {
  box(3, parseInt(this.value));
});

document.getElementById("box-4").addEventListener("change", function () {
  box(4, parseInt(this.value));
});

document.getElementById("box-5").addEventListener("change", function () {
  box(5, parseInt(this.value));
});

document.getElementById("box-6").addEventListener("change", function () {
  box(6, parseInt(this.value));
});

document.getElementById("box-7").addEventListener("change", function () {
  box(7, parseInt(this.value));
});

document.getElementById("box-8").addEventListener("change", function () {
  box(8, parseInt(this.value));
});

document.getElementById("box-9").addEventListener("change", function () {
  box(9, parseInt(this.value));
});

document.getElementById("box-10").addEventListener("change", function () {
  box(10, parseInt(this.value));
});

document.getElementById("box-11").addEventListener("change", function () {
  box(11, parseInt(this.value));
});

document.getElementById("box-12").addEventListener("change", function () {
  box(12, parseInt(this.value));
});

document.getElementById("box-13").addEventListener("change", function () {
  box(13, parseInt(this.value));
});

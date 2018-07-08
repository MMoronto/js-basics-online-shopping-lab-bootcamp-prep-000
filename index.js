var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemString) {
  var itemPrice = Math.floor((Math.random()*100)+1);
  var item = {[itemString]: itemPrice};

  cart.push(item)
  console.log(`${itemString} has been added to your cart.`);
  return cart;

}


function viewCart() {

  var itemString = [];
  var itemPrice = [];
  var itemsAndPrices = [];

  for (var i =0, l = cart.length; i < l; i++){
    itemString.push(Object.keys(cart[i])[0]);
    itemPrice.push(Object.values(cart[i])[0]);
  }
  if (!cart.length){
    console.log(`Your shopping cart is empty.`);
  }else if (l === 1) {
    console.log(`In your cart, you have ${itemString[0]} at $${itemPrice[0]}.`);
  }else if (l === 2) {
  console.log(`In your cart, you have ${itemString[0]} at $${itemPrice[0]} and ${itemString[1]} at $${itemPrice[1]}.`);
  }else if (l >= 3){
    for (var j= 0; j < l; j++)
    if (l - 1 === j) {
      itemsAndPrices.push (`and ${itemString[j]} at $${itemPrice[j]}.`)
  } else {
    itemsAndPrices.push (`${itemString[j]} at $${itemPrice[j]}.`)
    }

}
console.log(`In your cart, you have ${itemsAndPrices.join(", ")}`);
}

function total() {

  if (cart.lenght > 0) {
    var itemsTotal = 0;
  //}
  //cart.quantity= quantity;
 // var itemsTotal = cart[i].itemPrice
for (var i = 0, l = cart.length; i < l; i++) {
		itemsTotal = itemsTotal + cart[i].itemPrice;
	}

	//{
  //console.log(`$itemsTotal`);
//}

	return itemsTotal;
}else if (cart.length <= 0)
{
  console.log("no loop");
  return 0;
}
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

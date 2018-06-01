//Exercise 1

function takeOrder(){
  console.log('Order: pizza')
}

takeOrder();

//Exercise 2

function takeOrder(topping){
  console.log('Order: pizza topped with ' + topping)
}

takeOrder('bacon');

//Exercise 3

function takeOrder(topping, crustType){
  console.log('Order:' + crustType + ' pizza topped with ' + topping)
}

takeOrder('bacon', 'thin crust');
takeOrder('corn', 'wide crust');
takeOrder('salame', 'Thin crust');

// Exercise 4

var orderCount = 0;

function takeOrder(topping, crustType){
  orderCount++;
  console.log('Order:' + crustType + ' pizza topped with ' + topping)
}

function getSubTotal(itemCount){
  return itemCount*7.5;
}

takeOrder('bacon', 'thin crust');
takeOrder('corn', 'wide crust');
takeOrder('salame', 'Rhin crust');

console.log(getSubTotal(orderCount));

// Exercise 6 
var orderCount = 0;

function takeOrder(topping, crustType){
  orderCount++;
  console.log('Order:' + crustType + ' pizza topped with ' + topping)
}

function getSubTotal(itemCount){
  return itemCount*7.5;
}

function getTax(){
  return getSubTotal(orderCount)*0.06;
  
}

function getTotal(){
	return getTax()+getSubTotal(orderCount);  
}

takeOrder('bacon', 'thin crust');
takeOrder('corn', 'wide crust');
takeOrder('salame', 'Rhin crust');

console.log(getSubTotal(orderCount));

console.log(getTotal());
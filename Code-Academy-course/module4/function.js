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

//Exercise

function takeOrder(topping, crustType){
  console.log('Order:' + crustType + ' pizza topped with ' + topping)
}

takeOrder('bacon', 'thin crust');
takeOrder('corn', 'wide crust');
takeOrder('salame', 'Thin crust');
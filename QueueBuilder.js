var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty= function(number,queue){
  var length= queue.length;
  for(var i=0;i<length;i++){
  	number=queue.shift()(number);
  }
    return number;
  };
alert(applyAndEmpty(start,puzzlers));

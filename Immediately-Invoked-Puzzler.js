var puzzlers = [
2
  function(a) { return 8 * a - 10; },
3
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
4
  function(a) { return a * a + 4; },
5
  function(a) { return a % 5; }
6
];
7
 
8
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
9
 

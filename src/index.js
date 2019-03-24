module.exports = function getZerosCount(number, base) {
  var sum = 0, j = 1, i = 2, max = 0, a = new Array();
 
  do {
    if (base % i == 0) {
      a[j] = i;
      j++;
      base = base / i;
    }
    else {
      i++;
    }
  }
  while (i < base);
  a[j] = i; 

  for (i = 1; i < a.length; ++i) {
    if (a[i] > max) max = a[i];
  }

    for (var i = 1; i < 14; i++) {
      sum += Math.floor(number / Math.pow(max, i));
    }  

  return sum;
};
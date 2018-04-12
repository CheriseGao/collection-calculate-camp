'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var str = "";
  var collection = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q', 'r','s','t', 'u', 'v', 'w', 'x', 'y','z'];

  if(number_a < number_b){
    for(var i = number_a; i <= number_b; i++){
      str = "";
      if(i > 26){
        if(i%26 == 0) str = collection[Math.floor(i/26)-2] + collection[26 - 1];
        else{
          str = collection[Math.floor(i/26)-1] + collection[i%26 -1];
        }
        result.push(str);
      }else
        result.push(collection[i - 1]);
    }
  }else if(number_a > number_b){
    for(var i = number_a; i >= number_b; i--) {
      str = "";
      if (i > 26) {
        if (i % 26 == 0)  str = collection[Math.floor(i / 26) - 2] + collection[26 - 1];
        else {
          str = collection[Math.floor(i / 26) - 1] + collection[i % 26 - 1];
        }
        result.push(str);
      } else
        result.push(collection[i - 1]);
    }
  }else if(number_a == number_b){
    str = "";
    if (number_a > 26) {
      if (number_a % 26 == 0) str = collection[Math.floor(number_a / 26) - 2] + collection[26 - 1];
      else {
        str = collection[Math.floor(number_a / 26) - 1] + collection[number_a % 26 - 1];
      }
      result.push(str);
    } else
      result.push(collection[number_a - 1]);
  }

  return result;
}

module.exports = get_letter_interval_2;


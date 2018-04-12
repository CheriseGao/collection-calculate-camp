'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var all_relationship = {
    1 : "a", 2 : "b", 3 : "c", 4 : "d",5 : "e", 6 : "f"
  }
  if(number_a < number_b){
    for(var i = number_a; i <= number_b; i++){
      result.push(all_relationship[i]);
    }
  }else if(number_a > number_b){
    for(var i = number_a; i >= number_b; i--){
      result.push(all_relationship[i]);
    }
  }else if(number_a == number_b){
    result.push(all_relationship[number_a]);
  }
  return result;
}

module.exports = get_letter_interval;

'use strict';
var even_group_calculate_average = function(collection){
  var temp = [];
  var one_ave_c = 0;
  var two_ave_c = 0;
  var three_ave_c = 0;
  var ca = 0;
  var ct = 0;
  var cr = 0;
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if((i+1) % 2 == 0){
      temp.push(collection[i])
    }
  }
  var flag = 0
  for(var i = 0; i < temp.length; i++){
    if (temp[i] % 2 == 0) {
      flag = 1;
      break;
    }
  }
  if(flag) {
    for (var i = 0; i < temp.length; i++) {
      if (temp[i] % 2 == 0) {
        if (temp[i] <= 9) {
          one_ave_c += temp[i];
          ca++;
        } else if (temp[i] >= 10 && temp[i] <= 99) {
          two_ave_c += temp[i];
          ct++;
        } else {
          three_ave_c += temp[i];
          cr++;
        }
      }
    }

    if(ca != 0){
      one_ave_c /= ca;
      result.push(one_ave_c);
    }
    if(ct != 0 ){
      two_ave_c /= ct;
      result.push(two_ave_c);
    }
    if(cr != 0){
      three_ave_c /= cr;
      result.push(three_ave_c);
    }

  }else
    result.push(0);

  return result;
};
module.exports = even_group_calculate_average;

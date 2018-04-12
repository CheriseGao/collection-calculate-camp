'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for(var i = 0; i < collection_a.length; i++){
    var flag = 0;
    for(var j = 0; j < collection_b.length; j++ ){
      if(collection_a[i]%collection_b[j] == 0) {
        flag = 1;
        break;
      }
    }
    if(flag)
      result.push(collection_a[i]);
  }
  return result;
}

module.exports = choose_divisible_integer;

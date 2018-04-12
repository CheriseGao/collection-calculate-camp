'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result = 0;
  var count = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i] % 2 != 0) {
      result += collection[i];
      count++;
    }
  }
  result = result /count;
  return result;
}

module.exports = average_uneven;

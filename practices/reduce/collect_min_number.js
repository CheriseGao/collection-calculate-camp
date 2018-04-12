'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var min = collection[0];
  for(var i = 1; i < collection.length; i++){
    if(min > collection[i])
      min = collection[i];
  }
  return min;
}

module.exports = collect_min_number;


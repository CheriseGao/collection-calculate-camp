'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var count = 0;

  for(var i = 0; i < collection.length; i++){
    count = 1;
    for(var j = 0; j < collection.length; j++){
      if(i == j) continue;
      else{
        if(collection[i] == collection[j]){
          var temp = collection[i];
          result[temp] = ++count;
        }
      }
    }
  }
  return result;
}

module.exports = grouping_count;

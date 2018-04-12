'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for(var i = 0; i < collection_b.length; i++){
    for(var j = 0; j < collection_a.length; j++){
      if(collection_a[j] == collection_b[i])
        result.push(collection_a[j]);
    }
  }
  return result;
}

module.exports = get_intersection;

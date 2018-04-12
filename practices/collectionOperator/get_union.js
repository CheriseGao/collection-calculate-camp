'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection_a.length; i++){
    result.push(collection_a[i]);
  }

  for (var j = 0; j < collection_b.length; j++){
    var flag = 0;
    for (var i = 0; i < collection_a.length; i++) {
      if (collection_b[j] == collection_a[i]) {
        flag = 1;
        break;
      }
    }
    if(!flag){
      result.push(collection_b[j])
    }
  }

  return result;
}

module.exports = get_union;


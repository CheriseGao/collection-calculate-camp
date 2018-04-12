'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length = collection_b.length) {
    for (var i = 0, j = 0; i < collection_a.length && j < collection_b.length; i++, j++) {
      if (collection_a[i] != collection_b[j])
        return false;
    }
  }else return false;
  return true;
}

module.exports = compare_collections;



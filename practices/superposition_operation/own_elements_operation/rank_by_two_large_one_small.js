'use strict';

var swap = function (collection, a, b) {
  var temp = collection[a];
  collection[a] = collection[b];
  collection[b] = temp;
}

var insertSort = function (collection) {
  for(var i = 0; i < collection.length ; i++){
    var j = i;
    while (j > 0 && collection[j] < collection[j-1]){
      swap(collection,j,j-1);
      j--;
    }
  }
}

function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  insertSort(collection);
  for(var i = 0; i < collection.length && i+3 < collection.length; i+=3){
      swap(collection, i, i + 2);
      swap(collection, i, i + 1);
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;

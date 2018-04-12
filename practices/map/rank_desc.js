'use strict';

var swap = function (collection, a, b) {
  var temp = collection[a];
  collection[a] = collection[b];
  collection[b] = temp;
}

var insertSort = function (collection) {
  for (var i = 0; i < collection.length; i++) {
    var j = i;
    while (j > 0 && collection[j] < collection[j - 1]) {
      swap(collection, j, j - 1);
      j--;
    }
  }
}

var rank_desc = function(collection){
  insertSort(collection)
  return collection;
};

module.exports = rank_desc;

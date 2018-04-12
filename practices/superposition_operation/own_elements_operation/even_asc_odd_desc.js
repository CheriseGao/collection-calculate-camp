'use strict';
var swap = function (collection, a, b) {
  var temp = collection[a];
  collection[a] = collection[b];
  collection[b] = temp;
}

var insertSortA = function (collection) {
  for(var i = 0; i < collection.length ; i++){
    var j = i;
    while (j > 0 && collection[j] < collection[j-1]){
      swap(collection,j,j-1);
      j--;
    }
  }
}

var insertSortD = function (collection) {
  for (var i = 0; i < collection.length; i++) {
    var j = i;
    while (j > 0 && collection[j] > collection[j - 1]) {
      swap(collection, j, j - 1);
      j--;
    }
  }
}

var even_asc_odd_desc = function(collection){
  var result = [];
  var tempJ = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i] % 2 == 0)
      result.push(collection[i]);
    else tempJ.push(collection[i]);
  }
  insertSortA(result);
  insertSortD(tempJ);
  for(var i = 0; i < tempJ.length; i++){
    result.push(tempJ[i]);
  }

  return result;

};
module.exports = even_asc_odd_desc;

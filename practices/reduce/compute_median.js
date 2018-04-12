'use strict';

function compute_median(collection) {
  //在这里写入代码
  var mid = 0;
  var swap = function (collection, a, b) {
    var temp = collection[a];
    collection[a] = collection[b];
    collection[b] = temp;
  }

  var insertSort = function(dest){
    for(var i = 0; i < dest.length; i++){
      var j = i;
      while (j > 0 && dest[j-1] > dest[j] ){
        swap(dest, j, j-1);
        j--;
      }
    }
  }

  insertSort(collection);
  if(collection.length % 2 == 0){
    mid = ((collection[collection.length / 2]) + (collection[collection.length / 2 - 1]) ) / 2;
  }else{
    mid = collection[Math.floor(collection.length / 2)];
  }

  return mid;
}

module.exports = compute_median;



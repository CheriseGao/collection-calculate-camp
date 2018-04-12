'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var result = "";
  var mid = 0;
  var ship = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q', 'r','s','t', 'u', 'v', 'w', 'x', 'y','z'];

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
    mid = ( (collection[collection.length / 2]) + (collection[collection.length / 2 - 1]) ) / 2;
  }else{
    mid = collection[Math.floor(collection.length / 2)];
  }
  mid = Math.ceil(mid);
  if(mid > 26) {
    if(mid % 26 == 0)
      result = ( ship[ (Math.floor(mid / 26) - 2) ] + ship[26 - 1] );
    else
      result = ( ship[ (Math.floor(mid / 26) - 1) ] + ship[mid % 26 - 1] );
  }else
    result = ( ship[ mid - 1 ] );

  return result;
}

module.exports = median_to_letter;

'use strict';
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
function compute_chain_median(collection) {
  //在这里写入代码
  var dest = collection.split("->");
  var mid = 0;
  //dest是字符数组，将字符数组转化成整型数组
  for (var i = 0; i < dest.length; i++){
    dest[i] = parseInt(dest[i]);
  }
  //排序
  insertSort(dest);
  //求中位数，个数为 奇数和偶数
  if(dest.length % 2 == 0){
    mid = ( parseInt(dest[dest.length / 2]) + parseInt(dest[dest.length / 2 - 1]) ) / 2;
  }else {
    mid = parseInt(dest[Math.floor(dest.length / 2)]);
  }
  return mid;
}

module.exports = compute_chain_median;

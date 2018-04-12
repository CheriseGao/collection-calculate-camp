'use strict';
var swap = function (collection, a, b) {
  var temp = collection[a];
  collection[a] = collection[b];
  collection[b] = temp;
}

//冒泡
var bubbleSort = function (collection) {
  for(var i = 0; i < collection.length; i++){

    var flag = true; //如果flag值不变，表示介个序列已经有序~
    for(var j = 0; j < collection.length - i; j++){
      if(collection[j] < collection[j+1]){
        swap(collection,j,j+1);
        flag = false;
      }
    }
    if(flag)
      break;
  }
}
//简单选择
var selectSort = function (collection) {
  for(var i = 0; i < collection.length; i++){
    var max = i;
    for(var j = i + 1; j < collection.length; j++){
      if (collection[max] < collection[j]){
        max = j;
      }
    }
    if(max != i){
      swap(collection, max, i);
    }
  }
}

//快速排序
var quickSort = function(collection, low, high) {
  if(low >= high)
    return;
  var base = getBase(collection,low,high);
  quickSort(collection, low, base - 1);
  quickSort(collection, base + 1, high)
}

var getBase = function(collection, low, high) {
  if(low < high){
    var pivot = collection[low];

    while(low < high){
      while(low < high && collection[high] < pivot){
        high--;
      }
      if(low < high){
        collection[low] = collection[high];
      }
      while(low < high && collection[low] > pivot){
        low++;
      }
      if(low < high){
        collection[high] = collection[low];
      }
    }
    collection[low] = pivot;
    return low;
  }
}
//直接插入排序
var insertSort = function (collection) {
  for(var i = 0; i < collection.length ; i++){
    var j = i;
    while (j > 0 && collection[j] > collection[j-1]){
      swap(collection,j,j-1);
      j--;
    }
  }
}

var rank_asc = function(collection){

  //冒泡
  bubbleSort(collection);
  //简单选择排序
  selectSort(collection);
  //快速排序
  var right = 0;
  var left = collection.length - 1;
  quickSort(collection, right, left);
  //直接插入排序
  insertSort(collection);

  return collection;
};

module.exports = rank_asc;

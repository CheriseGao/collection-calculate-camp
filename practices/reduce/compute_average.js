'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = 0;
  var average;
  for (var i = 0; i < collection.length; i++){
    sum += collection[i];
  }
  average = sum / collection.length;
  return average;
}

module.exports = compute_average;


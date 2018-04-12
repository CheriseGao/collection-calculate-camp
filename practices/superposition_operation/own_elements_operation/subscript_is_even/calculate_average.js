'use strict';
var calculate_average = function(collection){
  var ave_count = 0;
  var sum = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i] % 2 == 0){
      sum += collection[i];
      ave_count++;
    }
  }
  ave_count = sum / ave_count;

  return ave_count;
};
module.exports = calculate_average;

'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  if(number % interval == 0) {
    for (var i = number; i >= 0; i -= interval) {
      result.push(parseFloat(i.toFixed(1)));
    }
  }else{
    for (var i = number; i >= 0; i -= interval) {
      result.push(parseFloat(i.toFixed(1)));
    }
    i=result[result.length-1]-interval;
    result.push(parseFloat(i.toFixed(1)));
  }
  return result;
}

module.exports = spilt_to_zero;

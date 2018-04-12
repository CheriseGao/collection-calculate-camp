'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var reslult = [];
  var flag = 0;
  for(var i = 0;i < collection.length; i++){
    for(var j = 0;j < collection.length; j++){
      if(i == j) continue;
      else {
        if (collection[i] == collection[j]) flag = 1;
      }
      if(!flag) reslult.push(collection[i]);
    }
  }
  return reslult;
}

module.exports = choose_no_repeat_number;

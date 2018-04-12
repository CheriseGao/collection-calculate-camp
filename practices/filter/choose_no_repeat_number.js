'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var reslult = [];
  for(var i = 0;i < collection.length; i++){
    for(var j = i+1; j < collection.length; j++){
      if(collection[i] === collection[j]){
        j = ++i;
      }
    }
    reslult.push(collection[i]);
  } // 去重复

  return reslult;
}

module.exports = choose_no_repeat_number;

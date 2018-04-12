'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < collection[i].length; j++){
      if(result.length == 0)
        result.push(collection[i][j]);
      else{
        for(var k = 0; k < result.length; k++){
          var flag = 0;
          if(result[k] == collection[i][j]){
            flag = 1;
            break;
          }
        }
        if(!flag){
          result.push(collection[i][j])
        }
      }
    }
  }
  return result;
}

module.exports = double_to_one;

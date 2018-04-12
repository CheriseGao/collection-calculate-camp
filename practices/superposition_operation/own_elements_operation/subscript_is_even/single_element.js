'use strict';
var single_element = function(collection){
  var result = [];

  for(var i = 0; i < collection.length; i++){
    var flag = 1;
    if((i+1) % 2  == 0 ) {
      for (var j = 0; j < collection.length; j++) {
        if( j != i) {
          if ((j + 1) % 2 == 0) {
            if (collection[i] == collection[j]) {
              flag = 0;
              break;
            }
          }
        }
      }

      if(flag){
        result.push(collection[i]);
      }
    }

  }
  return result;
};

module.exports = single_element;

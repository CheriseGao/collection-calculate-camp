'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];
  var ship = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q', 'r','s','t', 'u', 'v', 'w', 'x', 'y','z'];

  for (var i = 0; i < collection.length; i++){
    if(collection[i] > 26) {
      if(collection[i] % 26 == 0)
        result.push(ship[ (Math.floor(collection[i] / 26) ) - 2 ] + ship[26 - 1]);
      else
        result.push(ship[ (Math.floor(collection[i] / 26) ) - 1 ] + ship[collection[i] % 26 - 1] );
    }else
      result.push( ship[ collection[i] - 1] );
  }
  return result;
};

module.exports = number_map_to_word_over_26;

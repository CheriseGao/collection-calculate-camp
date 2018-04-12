'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result = "";
  var ship = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q', 'r','s','t', 'u', 'v', 'w', 'x', 'y','z'];
  var sum = 0;
  var ave = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  ave = Math.ceil(sum / collection.length);
  if (ave > 26) {
    if (ave % 26 == 0)
      result = (ship[(Math.floor(ave / 26) - 2)] + ship[26 - 1]);
    else
      result = (ship[(Math.floor(ave / 26) - 1)] + ship[ave % 26 - 1]);
  } else
      result = (ship[ave - 1]);


  return result;
}

module.exports = average_to_letter;


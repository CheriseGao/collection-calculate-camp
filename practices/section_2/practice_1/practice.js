function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var temp = [];

  for(var i = 0; i < collection.length; i++){
    for(var j = i+1; j < collection.length; j++) {
      if(collection[i] === collection[j]){
        j = ++i;
      }
    }
    temp.push(collection[i]);
  }
//  result.push(temp);

  for(var k = 0; k < temp.length; k++){
    var tmp = {};
    tmp.key = temp[k];
    tmp.count = 0;
    result.push(tmp);
  }

  for(var i = 0; i < result.length; i++){
    for(var j = 0; j < collection.length; j++){
      if(result[i].key == collection[j]){
       result[i].count++;
      }
    }
  }
  return result;
}

module.exports = count_same_elements;

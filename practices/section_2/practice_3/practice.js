
function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var new_array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j]){
        j = ++i;
      }
    }
    new_array.push(collection[i]);
  } // 去重复
  for(var i=0;i<new_array.length;i++){
    var number = 0;
    var temp = new_array[i];
    var position = temp.indexOf('-');// '-'存在位置
    var positions = temp.indexOf(':');
    var positionss = temp.indexOf('[');
    if(position != -1 ){         //-1就是表示有对应的特殊符号（‘-’）
      number = parseFloat(temp.substr(position + 1));//截取字符串
      temp = temp.substr(0,position);
    }
    else if(positions != -1){
      number = parseFloat(temp.substr(positions + 1));
      temp = temp.substr(0,positions);
    }
    else if(positionss != -1){
      number =  parseFloat(temp.substr(positionss + 1));
      temp = temp.substr(0,positionss);
    }
    else{
      for(var j = 0; j < collection.length; j++){
        if(collection[j] == temp){
          number++;
        }
      }
    }
    var k = {name: temp, summary: number};
    if(result.length == 0){
      result.push(k);
    }
    else {
      for (var n = 0, len = result.length; n < len; n++) {
        if (k.name == result[n].name) {
          result[n].summary += k.summary;
        }
        else if(k.name !== result[n].name && n == len -1){   //这是直到数组的最后一个
          result.push(k);
        }
      }
    }
    number = 0;
  }
  return result;
}

module.exports = count_same_elements;

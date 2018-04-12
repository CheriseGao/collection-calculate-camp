function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var temp = [];

  for(var i = 0; i < collection_a.length; i++){
    for(var j = i+1; j < collection_a.length; j++) {
      if(collection_a[i] === collection_a[j]){
        j = ++i;
      }
    }
    temp.push(collection_a[i]);
  }
//  result.push(temp);

  for(var k = 0; k < temp.length; k++){
    var tmp = {};
    tmp.key = temp[k];
    tmp.count = 0;
    result.push(tmp);
  }

  for(var i = 0; i < result.length; i++){
    for(var j = 0; j < collection_a.length; j++){
      if(result[i].key == collection_a[j]){
        result[i].count++;
      }
    }
  }

  for(var i = 0; i < object_b.value.length; i++){
    for(var j = 0; j < result.length; j++){
      if(object_b.value[i] === result[j].key){
        result[j].count -=  Math.floor(result[j].count / 3);
      }
    }
  }

  return result;
}

module.exports = create_updated_collection;

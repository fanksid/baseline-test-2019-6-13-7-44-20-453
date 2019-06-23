'use strict';

function collectSameElements(collectionA, objectB) {
  var result = new Array();
  for(var i = 0; i < collectionA.length; i++){
    if(objectB.value.includes(collectionA[i])){
        result.push(collectionA[i])
    }
  }
  return result;
}

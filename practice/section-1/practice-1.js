'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  for(var i = 0; i < collectionA.length; i++){
    if(collectionB.includes(collectionA[i])){
        result.push(collectionA[i])
    }
  }
  return result;
}

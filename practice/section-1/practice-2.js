'use strict';

function collectSameElements(collectionA, collectionB) {
  var methodJS = './practice-1.js';

  var result = new Array();
  for(var i = 0; i < collectionA.length; i++){
    for(var indexB = 0; indexB < collectionB.length; indexB++){
      if(collectionB[indexB].includes(collectionA[i])){
          result.push(collectionA[i])
      }
    }
  }
  return result;
}

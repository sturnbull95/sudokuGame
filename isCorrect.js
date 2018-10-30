function colCorrect(matrix,x,y){
  for(var i = 0; i < matrix.length; i++){
    if(i !== x){
      if(matrix[i][y] === matrix[x][y]){
        return false;
      }
    }
  }
  return true
}

function rowCorrect(matrix,x,y){
  for(var i = 0; i < matrix[x].length; i++){
    if(i !== y){
      if(matrix[x][i] === matrix[x][y]){
        return false;
      }
    }
  }
  return true
}
function subCorrect(matrix,x,y){
  var startY = 0
  var startX = 0
  var endY = 0
  var endX = 0
  if(y < 2){
    startY = 0
    endY = 2
  }
  if(y > 2 && y < 6){
    startY = 3
    endY = 5
  }
  if(y > 5){
    startY = 6
    endY = 8
  }
  if(x < 2){
    startX = 0
    endX = 2
  }
  if(x > 2 && x < 6){
    startX = 3
    endX = 5
  }
  if(x > 5){
    startX = 6
    endX = 8
  }
  for(var i = startX; i <= endX; i++){
    for(var j = startY; j <= endY; j++){
      if(i !== x && j !== y){
        if(matrix[i][j] === matrix[x][y]){
          return false
        }
      }
    }
  }
  return true
}
function applyAll(matrix,x,y){
  if(colCorrect(matrix,x,y) === false || rowCorrect(matrix,x,y) === false || subCorrect(matrix,x,y) === false){
    return false
  }
  return true
}

function correctGrid(matrix){
  for(var i = 0; i < matrix.length; i++){
    for(var x = 0; x < matrix[i].length; x++){
      if(colCorrect(matrix,i,x) === false || rowCorrect(matrix,i,x) === false || subCorrect(matrix,i,x) === false){
        return false
      }
    }
  }
  return true
}

var mat = [
  [1,3,2,5,6,7,9,4,8],
  [5,4,6,3,8,9,2,1,7],
  [9,7,8,2,4,1,6,3,5],
  [2,6,4,9,1,8,7,5,3],
  [7,1,5,6,3,2,8,9,4],
  [3,8,9,4,7,5,1,2,6],
  [8,5,7,1,2,3,4,6,9],
  [6,9,1,7,5,4,3,8,2],
  [4,2,3,8,9,6,5,7,1],
]
console.log(correctGrid(mat))
console.log(applyAll(mat,0,2))

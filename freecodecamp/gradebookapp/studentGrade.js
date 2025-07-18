function getAverage(scores){
  let sum = 0;
  let comp = scores.length;
  for (let i = 0; i < comp; i++){
    sum += scores[i];
  }
  return sum/comp;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//////////////////////////////////////////////////////////////////////////////////

function getGrade(score){
  if (score == 100){
    return "A++";
  } else if (90 <= score && score <= 99){
    return "A";
  } else if (80 <= score && score <= 89){
    return "B";
  } else if (70 <= score && score <= 79){
    return "C";
  } else if (60 <= score && score <= 69){
    return "D";
  }  else {
    return "F";
  }
}


console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/////////////////////////////////////////////////////////////////////

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade === "F"){
    return false;
  } else {
    return true;
  }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

///////////////////////////////////////////////////////////////////////////////////////////

function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)){
    return `Class average ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
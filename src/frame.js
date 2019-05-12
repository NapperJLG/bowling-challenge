var Frame = function() {
  this.score = 0
  this.frameResult = []
};

Frame.prototype.frameScore = function () {
  this.score = arrSum(this.frameResult);
  return this.score;
};

Frame.prototype.rolls = function (roll1, roll2) {
  this.frameResult.push(roll1, roll2);
  this.frameCount += 1
};

Frame.prototype.isStrike = function () {
  if(this.frameResult[0] === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isSpare = function () {
  if(this.frameScore() === 10 && this.frameResult[0] !== 10) {
  return true;
} else {
  return false;
}
};

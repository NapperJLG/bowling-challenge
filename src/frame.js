var Frame = function() {
  this.score = 0
  this.frameResult = []
};

Frame.prototype.frameScore = function () {
  return this.score;
};

Frame.prototype.rolls = function (roll1, roll2) {
  this.frameResult.push(roll1, roll2);
};

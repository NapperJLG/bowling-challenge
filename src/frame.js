var Frame = function() {
  this.score = 0
};

Frame.prototype.frameScore = function () {
  return this.score;
};

Frame.prototype.rolls = function (roll1, roll2) {
  this.score += (roll1 + roll2);
};

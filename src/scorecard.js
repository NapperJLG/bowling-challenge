var Scorecard = function() {
  this.score = 0
};

Scorecard.prototype.currentScore = function () {
  return this.score;
};

Scorecard.prototype.addFrame = function (frame) {
  this.score += frame.frameScore();
};

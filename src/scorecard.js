var Scorecard = function() {
  this.frameResults = []
  this.score = 0
  this.flatFrameResult = []
};

Scorecard.prototype.currentScore = function () {
  this.flattenFrameResults(this.frameResults);
  this.score = arrSum(this.flatFrameResult)
  return this.score
};

Scorecard.prototype.addFrame = function (frame) {
  this.frameResults.push(frame.frameResult)
};

Scorecard.prototype.flattenFrameResults = function (arr) {
  this.flatFrameResult = arr.reduce((total, currentValue) => total.concat(currentValue), this.flatFrameResult);
};

arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}

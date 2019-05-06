describe('gutter game', function() {
  it('records a total score of 0 ', function() {
    var scorecard = new Scorecard;

    for(var i = 0; i < 10; i++){
      frame1 = new Frame;
      frame1.rolls(0, 0);
      scorecard.addFrame(frame1);
    };

    expect(scorecard.currentScore()).toEqual(0);
  });
});

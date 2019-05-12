describe('final frame', function() {
  it('allows a third roll on the 10th frame if a strike or spare is scored', function() {
    var scorecard = new Scorecard;

    for(var i = 0; i < 9; i++){
      frame1 = new Frame;
      frame1.rolls(0, 0);
      scorecard.addFrame(frame1);
    };
    frame10 = new Frame;
    frame10.rolls(5,5);
    frame10.bonusRoll(7);
    scorecard.addFrame(frame10);

    expect(scorecard.currentScore()).toEqual(17);
  });
});

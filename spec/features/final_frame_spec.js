describe('final frame', function() {

  var scorecard;
  it('allows a third roll on the 10th frame if a strike or spare is scored', function() {
    scorecard = new Scorecard;

    for(var i = 0; i < 9; i++){
      frame1 = new Frame;
      frame1.rolls(0, 0);
      scorecard.addFrame(frame1);
    };
    frame10 = new Frame;
    frame10.rolls(5,5);
    scorecard.addFrame(frame10);
    scorecard.bonusRoll(7);


    expect(scorecard.currentScore()).toEqual(17);
  });

  it('does NOT allow a third roll if it is not the 10th frame', function() {
    scorecard = new Scorecard;

    for(var i = 0; i < 8; i++){
      frame1 = new Frame;
      frame1.rolls(0, 0);
      scorecard.addFrame(frame1);
    };
    frame9 = new Frame;
    frame9.rolls(5,5);
    scorecard.addFrame(frame10);
    scorecard.bonusRoll(7);


    expect(scorecard.currentScore()).toEqual(10);
  });

  it('does NOT allow a third roll if a strike or spare has not been scored', function() {
    scorecard = new Scorecard;

    for(var i = 0; i < 9; i++){
      frame1 = new Frame;
      frame1.rolls(5, 5);
      scorecard.addFrame(frame1);
    };
    frame10 = new Frame;
    frame10.rolls(5,4);
    scorecard.addFrame(frame10);
    scorecard.bonusRoll(7);


    expect(scorecard.currentScore()).toEqual(99);
  });
});

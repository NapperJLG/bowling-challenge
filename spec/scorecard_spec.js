describe('Scorecard', function() {

  var scorecard = new Scorecard;

  describe('calculate game score', function() {
    describe('addFrame', function() {
      it('adds frame score to total', function() {

        var frame1 = new Frame;
        frame1.rolls(1, 2);
        scorecard.addFrame(frame1);
        expect(scorecard.currentScore()).toEqual(3);
    });


    });
  });
});

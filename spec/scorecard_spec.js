describe('Scorecard', function() {

  var scorecard;
  var frame;
  describe('calculate game score', function() {
    describe('addFrame', function() {
      it('adds frame score to total', function() {
        scorecard = new Scorecard;
        frame1 = new Frame;
        frame1.rolls(1, 2);
        scorecard.addFrame(frame1);
        expect(scorecard.currentScore()).toEqual(3);
    });


    });
  });

  describe('keep track of frame count', function(){
    it('increase the frame count by one after every frame', function(){
      scorecard = new Scorecard;
      frame1 = new Frame;
      frame1.rolls(1, 2);
      scorecard.addFrame(frame1);
      expect(scorecard.frameCount).toEqual(1);
    });
  });
});

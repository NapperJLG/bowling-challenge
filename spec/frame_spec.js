describe('Frame', function() {

  var frame1;

  describe('getting frame score', function(){
    beforeEach(function(){
      frame1 = new Frame;
    });

    it('pushes rolls to frame array', function(){
      frame1.rolls(5,5);
      expect(frame1.frameResult).toEqual([5,5])
    });

    it('calculates frame score', function(){
      frame1.rolls(4,5);
      expect(frame1.frameScore()).toEqual(9);
    });


  });

  describe('strikes and spares', function() {
    beforeEach(function() {
      frame1 = new Frame;
    });

    it('records frame as being a strike', function() {
      frame1.rolls(10, 0);
      expect(frame1.isStrike()).toEqual(true);
    });

    it('records frame as NOT being a strike', function() {
      frame1.rolls(0, 10);
      expect(frame1.isStrike()).toEqual(false);
    });

    it('records frame as being a spare', function() {
      frame1.rolls(4, 6);
      expect(frame1.isSpare()).toEqual(true);
    });

    it('records frame as NOT being a spare', function() {
      frame1.rolls(4, 5);
      expect(frame1.isSpare()).toEqual(false);
    });
  });
});

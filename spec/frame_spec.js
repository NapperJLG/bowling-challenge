describe('Frame', function() {

  var frame1 = new Frame;

  describe('getting frame score', function() {
    it('adds two rolls together to calculate the frame score', function() {
      frame1.rolls(1, 2);
      expect(frame1.frameScore()).toEqual(3);
    });
  });
});

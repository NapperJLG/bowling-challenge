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


  });
});

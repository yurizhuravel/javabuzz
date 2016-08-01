describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('knows if a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

  });

});

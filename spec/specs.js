describe('pingypongy', function(){
  it("will count/increment by one from startNumber until it reaches chosen endNumber", function(){
    expect(pingypongy(0, 20)).to.equal("ping");
  });
});
















// A web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
//
// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"
// A user should be able to enter a new number and see new results over and over again.

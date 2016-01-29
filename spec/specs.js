describe("Pizza", function() {
  it("creates an object pizza and stores its properties", function() {
    var hotPizza = new Pizza("marinara", "small");
    expect(hotPizza.type).to.equal("marinara");
    expect(hotPizza.size).to.equal("small");
  });
  it("returns the pizza price", function() {
    var hotPizza = new Pizza("marinara", "small");
    expect(hotPizza.price()).to.equal("$5.00");
  });
});

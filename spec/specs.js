describe("Pizza", function() {
  it("creates an object pizza and stores its properties", function() {
    var hotPizza = new Pizza("marinara", "small", "grana");
    expect(hotPizza.type).to.equal("marinara");
    expect(hotPizza.size).to.equal("small");
    expect(hotPizza.extra).to.equal("grana");
  });
// Types of pizzas
  it("returns the pizza price", function() {
    var hotPizza = new Pizza("marinara", "small", "");
    expect(hotPizza.price()).to.equal("$5.00");
  });
  it("returns the price for types of pizza other than plain/marinara", function() {
    var hotPizza = new Pizza("margherita", "small", "");
    expect(hotPizza.price()).to.equal("$6.00");
  });
// Size Modifications
  it("increases price $2 for medium", function() {
    var hotPizza = new Pizza("marinara", "medium", "");
    expect(hotPizza.price()).to.equal("$7.00");
  });
  it("increases price $4 for large", function() {
    var hotPizza = new Pizza("marinara", "large", "");
    expect(hotPizza.price()).to.equal("$9.00");
  });
// Additions
  it("increases a set amount for extras to price of a pizza", function() {
    var hotPizza = new Pizza("marinara", "small", "due gramme di tartufo bianco");
    expect(hotPizza.price()).to.equal("$20.00");
  });
});

describe("Pizza", function() {
  it("creates an object pizza and stores its properties", function() {
    var newPizza = new Pizza("marinara", "small", "grana");
    expect(newPizza.type).to.equal("marinara");
    expect(newPizza.size).to.equal("small");
    expect(newPizza.extra).to.equal("grana");
  });
// Types of pizzas
  it("returns the pizza price", function() {
    var newPizza = new Pizza("marinara", "small", "");
    expect(newPizza.price()).to.equal("$5.00");
  });
  // Types of pizzas
  it("returns the price for different types of pizza", function() {
    var newPizza = new Pizza("margherita", "small", "");
    expect(newPizza.price()).to.equal("$6.00");
  });
// Size Modifications
  it("increases price $2 for medium", function() {
    var newPizza = new Pizza("marinara", "medium", "");
    expect(newPizza.price()).to.equal("$7.00");
  });
  it("increases price $4 for large", function() {
    var newPizza = new Pizza("marinara", "large", "");
    expect(newPizza.price()).to.equal("$9.00");
  });
// Additions
  it("increases a set amount for extras to price of a pizza", function() {
    var newPizza = new Pizza("marinara", "small", "due gramme di tartufo bianco");
    expect(newPizza.price()).to.equal("$20.00");
  });
});

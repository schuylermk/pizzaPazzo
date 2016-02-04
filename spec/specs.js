describe("Pizza", function() {
  it("creates an object pizza and stores its properties", function() {
    var newPizza = new Pizza("marinara", "small", "grana");
    expect(newPizza.type).to.equal("marinara");
    expect(newPizza.size).to.equal("small");
    expect(newPizza.extra).to.equal("grana");
  });
// Types of pizzas
  it("returns the pizza price based on the type", function() {
    var newPizza = new Pizza("marinara", "small", "grana");
    expect(newPizza.typePrice()).to.equal(5);
  });
// Sizes of pizzas
  it("returns the pizza price based on the size", function() {
    var newPizza = new Pizza("marinara", "medium", "grana");
    expect(newPizza.sizePrice()).to.equal(2);
  });
// Additions
  it("increases a set amount for extras to price of a pizza", function() {
    var newPizza = new Pizza("marinara", "small", "grana");
    expect(newPizza.extraPrice()).to.equal(1);
  });
  // Total price
  it("adds up the total price of a pizza", function() {
    var newPizza = new Pizza("marinara", "small", "grana");
    expect(newPizza.pizzaPrice()).to.equal(6);
  });
});

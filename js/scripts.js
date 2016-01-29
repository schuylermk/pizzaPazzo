function Pizza(type, size) {
  this.type = type;
  this.size = size;
}
Pizza.prototype.price = function() {
  var pizzaPrice = 5;
  return "$" + pizzaPrice.toFixed(2);
}

function Pizza(type, size, extra) {
  this.type = type;
  this.size = size;
  this.extra = extra;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 5;

// Types of pizze
  if(this.type === "margherita") {
    pizzaPrice += 1;
  } else if (this.type === "margherita con bufala") {
    pizzaPrice += 2;
  } else if (this.type === "tonnata") {
    pizzaPrice += 2;
  } else if (this.type === "wurstel e patatine") {
    pizzaPrice += 3;
  } else if (this.type === "salsiccia e friarielli") {
    pizzaPrice += 3;
  } else if (this.type === "pizza al 4 stagioni") {
    pizzaPrice += 4;
  } else {}
// Size Upcharges
  if (this.size === "medium") {
    pizzaPrice += 2;
  } else if (this.size === "large") {
    pizzaPrice += 4;
  } else {}
// Extras
  if ((this.extra === "rucola") || (this.extra === "grana")) {
    pizzaPrice += 1;
  } else if ((this.extra === "acchiughe") || (this.extra === "olio di peperoncini diavoletti")) {
    pizzaPrice += 2;
  } else if (this.extra === "due gramme di tartufo bianco") {
    pizzaPrice += 15;
  } else { }
  return "$" + pizzaPrice.toFixed(2);
}

$(document).ready(function() {
  $("form.pizza-pencil").submit(function(event) {
    event.preventDefault();
    var inputType = $("select#type").val();
    var inputSize = $("select#size").val();
    // $("form#more").submit(function(event) {
    //   var inputExtra = ($("input#extra").val());

      var hotPizza = new Pizza(inputType, inputSize, inputExtra);

      $(".pizza-price").text(hotPizza.price());
      $(".pizza-type").text(hotPizza.type);
      $(".pizza-size").text(hotPizza.size);
      // $(".pizza-extra")
      $("#results").show();
    // });
  });
});

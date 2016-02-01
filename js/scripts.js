function Pizza(type, size, extra) {
  this.type = type;
  this.size = size;
  this.extra = extra;
}

Pizza.prototype.types = function() {
  if (this.type === "marinara") {
    return 5;
  } else if (this.type === "margherita") {
    return 6;
  } else if (this.type === "margherita con bufala") {
    return 7;
  } else if (this.type === "tonnata") {
    return 7;
  } else if (this.type === "wurstel e patatine") {
    return 8;
  } else if (this.type === "salsiccia e friarielli") {
    return 8;
  } else {
    return 9;
  }
}

// Size Pricing
Pizza.prototype.sizes = function() {
  if (this.size === "medium") {
    return 2;
  } else if (this.size === "large") {
    return 4;
  } else {
    return 0;
  }
}

// Extras
Pizza.prototype.extras = function() {
  if (this.extra === "rucola") {
    return 1;
  } else if (this.extra === "grana") {
    return 1;
  } else if (this.extra === "acchiughe") {
    return 2;
  } else if (this.extra === "olio") {
    return 2;
  } else if (this.extra === "tartufi") {
    return 15;
  } else {}
}

Pizza.prototype.totals = function() {
  return this.types() + this.sizes() + this.extras();
}

$(document).ready(function() {
  var initialPrice = 0;
  $("#pizza-pencil").submit(function(event) {
    event.preventDefault();
    var inputType = $("select#type").val();
    var inputSize = $("select#size").val();
    var inputExtra = $("input#extra").val();
    var newPizza = new Pizza(inputType, inputSize, inputExtra);
    var pizzaPrice = newPizza.totals();
    var woodOven = [];


    woodOven.push(newPizza);
    woodOven.forEach(function(pizza) {
      $("ul#selections").append('<li>' + 'We\'ll start making your' + ' ' + pizza.size + ' ' + pizza.type + ' right away!' + '</li>');
      return initialPrice += pizzaPrice;
    });

      $("ul#totalPrice").append('<li>' + 'Your total is going to be $' + pizzaPrice + '. Thanks!' + '</li>');
  });
});

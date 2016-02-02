function Pizza(type, size, extra) {
  this.type = type;
  this.size = size;
  this.extra = extra;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;
  var typePrice = 0;
  var sizePrice = 0;
  var extraPrice = 0;

  //Pricing by type...
  Pizza.prototype.type = function() {
    if (this.type === "marinara") {
      typePrice += 5;
    } else if (this.type === "margherita") {
      typePrice += 6;
    } else if (this.type === "margherita con bufala") {
      typePrice += 7;
    } else if (this.type === "tonnata") {
      typePrice += 7;
    } else if (this.type === "wurstel e patatine") {
      typePrice += 8;
    } else if (this.type === "salsiccia e friarielli") {
      typePrice += 8;
    } else {
      typePrice += 9;
    }
    return typePrice;
  }
  // Pricing by size...
  Pizza.prototype.size = function() {
    if (this.size === "medium") {
       sizePrice += 2;
    } else if (this.size === "large") {
      sizePrice += 4;
    } else {}
  }

  // Pricing the extras...
  Pizza.prototype.extra = function() {
    if (this.extra === "rucola" || this.extra === "grana") {
      extraPrice += 1;
    } else if (this.extra === "acchiughe" || this.extra === "olio") {
      extraPrice += 2;
    } else if (this.extra === "tartufi") {
      extraPrice += 15;
    } else {}
  }
  pizzaPrice = typePrice + sizePrice + extraPrice;
  // return '$' + pizzaPrice.toFixed(2);
}

$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var inputType = $("select#type").val();
    var inputSize = $("select#size").val();
    var inputExtras = [];
    $("#extra input[type=checkbox]:checked").each ( function() {
   alert ( $(this).val()); });
    var newPizza = new Pizza(inputType, inputSize, inputExtra);
    var pizzaPrice = newPizza.price();
    var woodOven = [];


    woodOven.push(newPizza);
    woodOven.forEach(function(pizza) {
      $("div#selections").append('<li>' + 'We\'ll start making your' + ' ' + pizza.size + ' ' + pizza.type + ' right away!' + '</li>');
    });

      $("div#totalPrice").append('<li>' + 'Your total is going to be $' + pizzaPrice + '. Thanks!' + '</li>');
  });
});

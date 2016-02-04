function Pizza(type, size, extra) {
  this.type = type;
  this.size = size;
  this.extra = extra;
}
  //Pricing by type...
  Pizza.prototype.typePrice = function() {
    if (this.type === "Marinara (tomato, garlic, oreg., basil)") {
      return +5;
    } else if (this.type === "Margherita (tomato, mozz., basil)") {
      return +6;
    } else if (this.type === "Margherita with Buffalo Mozzarella") {
      return +7;
    } else if (this.type === "Tuna w/ Fior di Latte") {
      return +7;
    } else if (this.type === "Wurstel e Patatine") {
      return +8;
    } else if (this.type === "Sausage and Broccoli Rabe w/ Provola") {
      return +8;
    } else {
      return +10;
    }
  }
  // Pricing by size...
  Pizza.prototype.sizePrice = function() {
    if (this.size === "medium") {
       return +2;
    } else if (this.size === "Large") {
      return +4;
    } else {
    return +0;
    }
  }
  // Pricing the extras...
  Pizza.prototype.extraPrice = function() {
    if (this.extra === "rucola" || this.extra === "grana") {
      return +1;
    } else if (this.extra === "acchiughe" || this.extra === "olio") {
      return +2;
    } else if (this.extra === "tartufi") {
      return +15;
    } else {
    return +0;
    }
  }

  Pizza.prototype.pizzaPrice = function() {
   return this.typePrice() + this.sizePrice() + this.extraPrice();
  }


$(document).ready(function() {
  var wholePrice = 0;

  $("form#pizza-pencil").submit(function(event) {
    event.preventDefault();

    var inputType = $("select#type").val();
    var inputSize = $("select#size").val();
    var inputExtra = $("input[name='extra']:checked").val();
    var newPizza = new Pizza(inputType, inputSize, inputExtra);
    var newPrice = newPizza.pizzaPrice();
    var pizzaOven = [];

    pizzaOven.push(newPizza);

    pizzaOven.forEach(function(pizza) {

    $("div#results").show();
    $("div#selections").append('<li>' + 'We\'ll start making your' + ' ' + pizza.size + ' ' + pizza.type + ' right away!' + '</li>');
    return wholePrice += newPrice;
    });

    $("div#wholePrice").append('<li>' + 'Your total is going to be $' + wholePrice + '     Grazie mille!' + '</li>');
  });
});

// // if (extra > 0) {
// //   append('<li>' + '...and don\'t worry, we didn\'t forget the ' +  )
// // }

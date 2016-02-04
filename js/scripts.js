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
    if (this.size === "medium (35cm)") {
       return +2;
    } else if (this.size === "large (50cm)") {
      return +4;
    } else {
    return +0;
    }
  }
  // Pricing the extras...
  Pizza.prototype.extraPrice = function() {
    if (this.extra === "arugala") {
      return +1;
    } if (this.extra === "grana padano") {
      return +1;
    } if (this.extra === "anchovies") {
      return +2;
    } if (this.extra === "olio di peperoncini") {
      return +2;
    } if (this.extra === "tartufi"){
      return +15;
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
    // $("div#wholePrice").each(function(){
    //   reset();
    // });
    $("div#wholePrice").append('<li>' + 'Your new total is going to be $' + wholePrice + '.     Grazie mille!' + '</li>');
  });
});

// // if (extra > 0) {
// //   append('<li>' + '...and don\'t worry, we didn\'t forget the ' +  )
// // }

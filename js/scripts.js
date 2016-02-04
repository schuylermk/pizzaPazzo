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
  };
  // Pricing by size...
  Pizza.prototype.sizePrice = function() {
    if (this.size === "medium (35cm)") {
       return +2;
    } else if (this.size === "large (50cm)") {
      return +4;
    } else {
    return +0;
    }
  };
  // Pricing the extras...
  Pizza.prototype.extraPrice = function() {
    var extraCost = 0;
    this.extra.forEach(function(extraTopping) {
      if (extraTopping === "arugala") {
        extraCost += 1;
      }
      if (extraTopping === "grana padano") {
        extraCost += 1;
      }
      if (extraTopping === "anchovies") {
        extraCost += 2;
      }
      if (extraTopping === "olio di peperoncini") {
        extraCost += 2;
      }
      if (extraTopping === "tartufi"){
        extraCost += 15;
      }
    });
    return extraCost;
  };

  Pizza.prototype.pizzaPrice = function() {
   return this.typePrice() + this.sizePrice() + this.extraPrice();
  };


$(document).ready(function() {
  var wholePrice = 0;
  $("form#pizza-pencil").submit(function(event) {
    event.preventDefault();

    var inputType = $("select#type").val();
    var inputSize = $("select#size").val();

    // You have multiple inputs, so $("input:checkbox[name=extra]:checked") will return an array
    // Try running a .forEach(function(extra) { push to array })
    // var inputExtra = $("input:checkbox[name=extra]:checked").val();
    var inputExtra = [];
    $("input:checkbox[name='extra']:checked").each(function() {
      inputExtra.push($(this).val());
    });

    var newPizza = new Pizza(inputType, inputSize, inputExtra);
    var newPrice = newPizza.pizzaPrice();
    wholePrice += newPrice;

    $("div#results").show();
    $("div#selections").append('<li>' + 'We\'ll start making your' + ' ' + newPizza.size + ' ' + newPizza.type + ' right away!' + '</li>');

    $("div#wholePrice").empty().append('<li>' + 'Your new total is going to be $' + wholePrice + '.     Grazie mille!' + '</li>');
  });
});

// // if (extra > 0) {
// //   append('<li>' + '...and don\'t worry, we didn\'t forget the ' +  )
// // }

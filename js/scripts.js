var yourPizza;

function Pizza(size, cost) {
  this.toppings = [];
  this.size = size;
  this.cost = cost;
};

Pizza.prototype.calculateCost = function(pizza) {
  yourPizza.toppings.forEach(function() {
    pizza.cost += 1;
  });

  return this.cost;
};

$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    $(".order-display").empty();

    pizzaSize = "small";
    pizzaCost = 10;

    yourPizza = new Pizza(pizzaSize, pizzaCost);

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {

      var yourToppings = $(this).val();
      yourPizza.toppings.push(yourToppings);
      yourPizza.calculateCost(yourPizza);
    });
      $(".order-placeholder").hide();
      $(".order-display").show();
      $(".order-display").append("<h3>Your </h3>");
      yourPizza.toppings.forEach(function(element) {
        $(".order-display").append("<h3>" + element + " </h3>");
      });
    $(".order-display").append("<h3>pizza will be $" + yourPizza.cost + ".</h3>");

  });
});

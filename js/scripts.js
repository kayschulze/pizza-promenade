var yourPizza;
var pizzaSizeCosts = [10, 15, 20];

function Pizza(size = "small", cost = 10) {
  this.toppings = [];
  this.size = size;
  this.cost = cost;
};

Pizza.prototype.calculateCost = function(pizza) {

  return this.cost++;
};

function Customer() {
  this.first = "";
  this.last = "";
  this.street = "";
  this.city = "";
  this.state = "";
  this.zip = "";
};

$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    $(".order-display").empty();

    yourPizza = new Pizza();

    yourPizza.size = $("input:radio[name=pizza-size]:checked").val();

    if (yourPizza.size === "small") {
      yourPizza.cost = pizzaSizeCosts[0];
    }
    else if (yourPizza.size === "medium") {
      yourPizza.cost = pizzaSizeCosts[1];
    }
    else if (yourPizza.size === "large") {
      yourPizza.cost = pizzaSizeCosts[2];
    }

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

    var currentCustomer = new Customer();
    currentCustomer.first = $("input#firstName").val();
    currentCustomer.last = $("#lastName").val();
    currentCustomer.street = $("#streetAddress").val();
    currentCustomer.city = $("#city").val();
    currentCustomer.state = $("#state").val();
    currentCustomer.zip = $("#zip").val();

    $(".delivery-display").show();
    $(".delivery-display").append("<h3>" + currentCustomer.first + " " + currentCustomer.last + "</br>" + currentCustomer.street + "</br>" + currentCustomer.city + ", " + currentCustomer.state + " " + currentCustomer.zip + "</h3>");

  });
});

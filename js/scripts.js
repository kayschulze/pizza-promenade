var yourPizza;
var pizzaSizeCosts = [10, 15, 20];
var pizzaCrustCosts = [0, 3, 5];

function Pizza(size = "small", cost = 10, crust = "thin") {
  this.toppings = [];
  this.size = size;
  this.cost = cost;
  this.crust = crust;
};

Pizza.prototype.sizeCost = function(pizza) {
  if (pizza.size === "small") {
    pizza.cost = pizzaSizeCosts[0];
  }
  else if (pizza.size === "medium") {
    pizza.cost = pizzaSizeCosts[1];
  }
  else if (pizza.size === "large") {
    pizza.cost = pizzaSizeCosts[2];
  }
  return pizza.cost;
};

var resetFields = function() {
  $("input.pizza-toppings").val(false);
}

Pizza.prototype.crustCost = function(pizza) {
  if (pizza.crust === "thin") {
    pizza.cost += pizzaCrustCosts[0];
  }
  else if (pizza.crust === "deepDish") {
    pizza.cost += pizzaCrustCosts[1];
  }
  else if (pizza.crust === "wholeWheat") {
    pizza.cost += pizzaCrustCosts[2];
  }
  else if (pizza.crust === "glutenFree") {
    pizza.cost += pizzaCrustCosts[2];
  }
  return pizza.cost;
};

Pizza.prototype.calculateCost = function(pizza) {

  return this.cost += 1;
};

function Customer(pizza) {
  this.first = "";
  this.last = "";
  this.street = "";
  this.city = "";
  this.state = "";
  this.zip = "";
  this.pizzas = [];
};

Customer.prototype.displayCustomer = function(customer) {
  customer.first = $("input#firstName").val();
  customer.last = $("#lastName").val();
  customer.street = $("#streetAddress").val();
  customer.city = $("#city").val();
  customer.state = $("#state").val();
  customer.zip = $("#zip").val();
};

var displayDelivery = function(currentCustomer) {
  $(".delivery-display").show();
  $(".delivery-display").append("<h3>" + currentCustomer.first + " " + currentCustomer.last + "</br>" + currentCustomer.street + "</br>" + currentCustomer.city + ", " + currentCustomer.state + " " + currentCustomer.zip + "</h3>");
};

var displayOrder = function(pizza) {
  $(".order-placeholder").hide();
  $(".order-display").show();
  $(".order-display").append("<h3>Your </h3>");
  pizza.toppings.forEach(function(topping) {
    $(".order-display").append("<h3>" + topping + " </h3>");
  });
$(".order-display").append("<h3>pizza will be $" + pizza.cost + ".</h3>");
};

$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    $(".order-display").empty();

    // Compare input values to prices for pizza size and pizza crust.
    yourPizza = new Pizza();
    yourPizza.size = $(this).find("input:radio[name=pizza-size]:checked").val();
    yourPizza.cost = yourPizza.sizeCost(yourPizza);
    yourPizza.crust = $(this).find("input:radio[name=crust-type]:checked").val();
    yourPizza.cost = yourPizza.crustCost(yourPizza);

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var yourToppings = $(this).val();
      yourPizza.toppings.push(yourToppings);
      yourPizza.calculateCost(yourPizza);
    });

    $("#myPizzas").show();
    $("ul#pizzas").append("<li><span class='pizza'>Order 1</span></li>")

    $(".pizza").last().click(function() {
      $("ul#pizzas").text();
    })

    // Display customer's order and cost.
    displayOrder(yourPizza);

    // Display customer's delivery address.
    var currentCustomer = new Customer();
    currentCustomer.displayCustomer(currentCustomer);

    displayDelivery(currentCustomer);

    currentCustomer.pizzas.push(yourPizza);

  });
});

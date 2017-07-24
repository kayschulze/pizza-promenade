var yourPizza;
var pizzaSizeCosts = [10, 15, 20];
var pizzaCrustCosts = [0, 3, 5];
var pizzaCounter = 0;

function Pizza(size = "small", cost = 10, crust = "thin", pizzaCounter = 0) {
  this.toppings = [];
  this.size = size;
  this.cost = cost;
  this.crust = crust;
  this.pizzaNumber = pizzaCounter;
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
  $(".delivery-display").empty();
  $(".delivery-display").show();
  $(".delivery-display").append("<h3>" + currentCustomer.first + " " + currentCustomer.last + "</br>" + currentCustomer.street + "</br>" + currentCustomer.city + ", " + currentCustomer.state + " " + currentCustomer.zip + "</h3>");
};

var displayOrder = function(pizza) {
  $(".order-placeholder").hide();
  $("#order-display").show();
  $("#order-display h2").text("Your Pizza #" + pizza.pizzaNumber + " Order:");
  $(".toppings-choices").empty();
  pizza.toppings.forEach(function(topping) {
    $(".toppings-choices").append(" " + topping + " ");
  });
  $(".size-choice").text(pizza.size);
  $(".crust-choice").text(pizza.crust);
  $(".order-display").text(pizza.cost);
};

$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    $(".order-display").empty();

    // Compare input values to prices for pizza size and pizza crust.
      var yourPizza = new Pizza();

      yourPizza.size = $("input:radio[name=pizza-size]:checked").val();
      yourPizza.cost = yourPizza.sizeCost(yourPizza);
      yourPizza.crust = $("input:radio[name=crust-type]:checked").val();
      yourPizza.cost = yourPizza.crustCost(yourPizza);
      pizzaCounter++;
      yourPizza.pizzaNumber = pizzaCounter;

    $("input:checkbox[name=pizza-toppings]:checked").each(function()  {
      var yourToppings = $(this).val();
      yourPizza.toppings.push(yourToppings);
      yourPizza.calculateCost(yourPizza);
    });


    $("#myPizzas").show();

    $("ul#pizzas").append("<li><span class='pizza'>Pizza #" + yourPizza.pizzaNumber + " </span></li>");

    $(".pizza").last().click(function() {
      displayOrder(yourPizza);
    });

    // Display customer's order and cost.
    // displayOrder(yourPizza);

    // Display customer's delivery address.
    var currentCustomer = new Customer();
    currentCustomer.displayCustomer(currentCustomer);

    displayDelivery(currentCustomer);

    currentCustomer.pizzas.push(yourPizza);

  });
});

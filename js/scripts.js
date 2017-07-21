function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    $(".order-display").empty();

    var yourPizza = new Pizza();

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {

      var yourToppings = $(this).val();
      yourPizza.toppings.push(yourToppings);
    });
      $(".order-placeholder").hide();
      $(".order-display").show();
      $(".order-display").append("<h3>You have ordered a </h3>");
      yourPizza.toppings.forEach(function(element) {
        $(".order-display").append("<h3>" + element + " </h3>");
      });
    $(".order-display").append("<h3>pizza.</h3>");

  });
});

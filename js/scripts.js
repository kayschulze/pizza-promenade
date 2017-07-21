$(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var yourToppings = $(this).val();
      console.log(yourToppings);
      $(".order-placeholder").hide();
      $(".order-display").show();
      $(".order-display").append("<h3>You have ordered a pizza with " + yourToppings + ".</h3></br>")
    });
  });
});

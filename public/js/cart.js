let cartData = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : [];

console.log("cartData", cartData);
$(".btn-item").on("click", function() {
  const itemName = $(this)
    .closest(".product")
    .find(".item-txt")
    .text();
  console.log($(this).closest(".product"));
  console.log(itemName);
  $.get("/api/products/" + itemName, function(data) {
    if (data.length !== 0) {
      console.log(data);
      const { productName, price } = data;
      cartData.push({
        productName,
        price
      });
      localStorage.setItem("cartData", JSON.stringify(cartData));
      // for each one of the chirps make this thing
      showCart();
    }
  });
});

function showCart() {
  $("#itemSection").empty();
  for (var i = 0; i < cartData.length; i++) {
    var row = $("<div>");
    row.addClass("item");

    row.append("<p>" + cartData[i].productName + "</p>");
    row.append("<p> $" + cartData[i].price + "</p>");

    $("#itemSection").prepend(row);
  }
}

showCart();

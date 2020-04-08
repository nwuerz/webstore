$(".itemBtn").on("click", function() {
  const itemName = $(".item-Txt")
    .val()
    .trim();
  $.get("/api/products" + itemName, function(data) {
    if (data.length !== 0) {
      // for each one of the chirps make this thing
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("item");

        row.append("<p>" + data[i].productName + " chirped.. </p>");
        row.append("<p>" + data[i].price + "</p>");

        $("#itemSection").prepend(row);
      }
    }
  });
});

// console.log("this is user " + db.User.email);
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
  let sumPriceArray = [];

  $("#itemSection").empty();
  for (var i = 0; i < cartData.length; i++) {
    var row = $("<div>");
    row.addClass("item");

    row.append("<h1>" + cartData[i].productName + "</h1>");
    row.append("<h3> $" + cartData[i].price + "</h3>");

    $("#itemSection").prepend(row);

    let sumPrice = parseInt(cartData[i].price);
    console.log(sumPrice);

    sumPriceArray.push(sumPrice);
  }
  //this is how we get our total
  let totalPrice = sumPriceArray.reduce((a, b) => a + b);
  console.log("this is the price " + totalPrice);

  var totalRow = $("<div>");
  totalRow.addClass("totalPrice");
  totalRow.append("<h1>" + "Total Price" + "</h1>");
  totalRow.append("<h3>" + "$ " + totalPrice + "</h3>");
  $("#priceSection").prepend(totalRow);

  $("#priceBtn").on("click", function() {
    // alert("Thank you for shopping with us. Your total is " + "$" + totalPrice);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Your life depends on it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Buy it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Purchased",
            "Your total is $" + totalPrice,
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelled", "Keep shopping!", "error");
        }
      });
    //clear goes here

    // $(".clearBtn").on("click", function() {
    //   (cartData.total = 0), (cartData.rows = []);
    // });

    // $(".clearBtn").on("click", function() {
    //   clearCart();
    // });

    // $(".priceBtn").on("click", function() {
    //   localStorage.clear();
    // });

    // $(".btn btn-success").on("click", function() {
    //   localStorage.removeItem("cartData");
    // });
  });
}

showCart();

$(".btn-item").on("click", function() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "added to cart",
    showConfirmButton: false,
    timer: 1500
  });
});

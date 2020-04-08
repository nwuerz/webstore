var db = require("../");
var nodemailer = require("nodemailer");
console.log("this is user " + db.User.email);
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

    row.append("<p>" + cartData[i].productName + "</p>");
    row.append("<p> $" + cartData[i].price + "</p>");

    $("#itemSection").prepend(row);

    let sumPrice = parseInt(cartData[i].price);
    console.log(sumPrice);

    sumPriceArray.push(sumPrice);
  }
  //this is how we get our total
  let totalPrice = sumPriceArray.reduce((a, b) => a + b);
  console.log("this is the price " + totalPrice);
}

showCart();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "doomsdaywebstore@gmail.com",
    pass: "PA$$word22"
  }
});

var mailOptions = {
  from: "doomsdaywebstore@gmail.com",
  to: db.User.email,
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

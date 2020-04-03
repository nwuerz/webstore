var fs = require("fs");

var db = require("./models/index");

db.sequelize.sync({ force: true }).then(function() {
  var imageData = fs.readFileSync(__dirname + "./public/assets");
  Image.create(
    {
      type: "jpg",
      name: "band aids",
      data: imageData
    },
    {
      type: "jpg",
      name: "beef jerky",
      data: imageData
    },
    {
      type: "jpg",
      name: "body wash",
      data: imageData
    },
    {
      type: "jpg",
      name: "canned sout",
      data: imageData
    },
    {
      type: "jpg",
      name: "cart",
      data: imageData
    },
    {
      type: "jpg",
      name: "cereal",
      data: imageData
    },
    {
      type: "jpg",
      name: "deodorant",
      data: imageData
    },
    {
      type: "jpg",
      name: "eggs",
      data: imageData
    },
    {
      type: "jpg",
      name: "gauze",
      data: imageData
    },
    {
      type: "jpg",
      name: "papertowels",
      data: imageData
    },
    {
      type: "jpg",
      name: "protein",
      data: imageData
    },
    {
      type: "jpg",
      name: "ramen",
      data: imageData
    },
    {
      type: "jpg",
      name: "rice",
      data: imageData
    },
    {
      type: "jpg",
      name: "shampoo",
      data: imageData
    },
    {
      type: "jpg",
      name: "toiletPaper",
      data: imageData
    },
    {
      type: "jpg",
      name: "tooth brush",
      data: imageData
    },
    {
      type: "jpg",
      name: "tooth paste",
      data: imageData
    },
    {
      type: "jpg",
      name: "water",
      data: imageData
    }
  );
});

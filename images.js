var fs = require("fs");

var db = require("./models/index");

db.sequelize.sync({ force: true }).then(function() {
  var imageData = fs.readFileSync(__dirname + "./public/assets");
  Image.create(
    {
      type: "jpg",
      name: "advil",
      data: imageData
    },
    {
      type: "jpg",
      name: "ak-47",
      data: imageData
    },
    {
      type: "jpg",
      name: "band-aids",
      data: imageData
    },
    {
      type: "jpg",
      name: "beef-jerky",
      data: imageData
    },
    {
      type: "jpg",
      name: "beer",
      data: imageData
    },
    {
      type: "jpg",
      name: "body-wash",
      data: imageData
    },
    {
      type: "jpg",
      name: "canned-soup",
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
      name: "cereal",
      data: imageData
    },
    {
      type: "jpg",
      name: "chainsaw",
      data: imageData
    },
    {
      type: "jpg",
      name: "ciggarettes",
      data: imageData
    },
    {
      type: "jpg",
      name: "cross-bow",
      data: imageData
    },
    {
      type: "jpg",
      name: "crutches",
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
      name: "flame-thrower",
      data: imageData
    },
    {
      type: "jpg",
      name: "flash-light",
      data: imageData
    },
    {
      type: "jpg",
      name: "gauze",
      data: imageData
    },
    {
      type: "jpg",
      name: "gloves",
      data: imageData
    },
    {
      type: "jpg",
      name: "grenade",
      data: imageData
    },
    {
      type: "jpg",
      name: "hand-sanitizer",
      data: imageData
    },
    {
      type: "jpg",
      name: "machete",
      data: imageData
    },
    {
      type: "jpg",
      name: "mask",
      data: imageData
    },
    {
      type: "jpg",
      name: "matches",
      data: imageData
    },
    {
      type: "jpg",
      name: "papertowels",
      data: imageData
    },
    {
      type: "jpg",
      name: "protein-powder",
      data: imageData
    },
    {
      type: "jpg",
      name: "radio",
      data: imageData
    },
    {
      type: "jpg",
      name: "ramen-noodels",
      data: imageData
    },
    {
      type: "jpg",
      name: "rice",
      data: imageData
    },
    {
      type: "jpg",
      name: "rocket-launcher",
      data: imageData
    },
    {
      type: "jpg",
      name: "rope",
      data: imageData
    },
    {
      type: "jpg",
      name: "sanitizer",
      data: imageData
    },
    {
      type: "jpg",
      name: "shampoo",
      data: imageData
    },
    {
      type: "jpg",
      name: "spike-bat",
      data: imageData
    },
    {
      type: "jpg",
      name: "splints",
      data: imageData
    },
    {
      type: "jpg",
      name: "surgical-mask",
      data: imageData
    },
    {
      type: "jpg",
      name: "tent",
      data: imageData
    },
    {
      type: "jpg",
      name: "toilet-paper",
      data: imageData
    },
    {
      type: "jpg",
      name: "tooth-brush",
      data: imageData
    },
    {
      type: "jpg",
      name: "tooth-paste",
      data: imageData
    },
    {
      type: "jpg",
      name: "water-filter",
      data: imageData
    },
    {
      type: "jpg",
      name: "water",
      data: imageData
    },
    {
      type: "jpg",
      name: "wheel-chair",
      data: imageData
    }
  );
});

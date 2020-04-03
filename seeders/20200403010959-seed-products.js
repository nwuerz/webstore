"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          productName: "Toilet Paper",
          price: 19.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Paper Towels",
          price: 19.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tooth Paste",
          price: 5.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Deodorant",
          price: 5.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Body Wash",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tooth Brush",
          price: 9.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Hand Sanitizer",
          price: 12.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Shampoo",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Beef Jerky",
          price: 21.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Canned Soup",
          price: 4.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ramen Noodels",
          price: 0.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Eggs",
          price: 7.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cereal",
          price: 4.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Protein Powder",
          price: 24.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Water",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rice",
          price: 4.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Band Aids",
          price: 9.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Gauze",
          price: 1.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Splints",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Surgical Mask",
          price: 1.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Gloves",
          price: 9.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Advil",
          price: 8.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Crutches",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Wheel Chair",
          price: 129.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Spike Bat",
          price: 29.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Flame Thrower",
          price: 374.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rocket Launcher",
          price: 1499.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Machete",
          price: 49.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "AK-47",
          price: 799.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Chainsaw",
          price: 149.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Grenade",
          price: 99.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cross Bow",
          price: 99.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Beer",
          price: 21.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ciggarettes",
          price: 7.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cross Bow",
          price: 99.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Radio",
          price: 89.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Matches",
          price: 4.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rope",
          price: 14.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tent",
          price: 74.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Flash Light",
          price: 29.99,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  }

  // down: function(queryInterface) {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete('People', null, {});
  //   */
  // }
};

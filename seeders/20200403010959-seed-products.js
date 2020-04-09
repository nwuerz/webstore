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
            "I'd stock-pile this stuff unless you wanna be going outside to make your out T-P!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Paper Towels",
          price: 19.99,
          description:
            "For when you need to get all that Zombie blood of your hands!!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tooth Paste",
          price: 5.99,
          description:
            "Nobody want's to be quarantined with a guy with stinky breath!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Deodorant",
          price: 5.99,
          description:
            "Zombies are attracted to your stink so freshen your self up!!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Body Wash",
          price: 14.99,
          description:
            "Nobody want's to quarantine with you smellin' like that!!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tooth Brush",
          price: 9.99,
          description:
            "To help you freshen that breath when your out hitting on lady zombies!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Hand Sanitizer",
          price: 12.99,
          description: "To help kill those germs the zombies got!",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Shampoo",
          price: 14.99,
          description: "",
          category: "toiletries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Beef Jerky",
          price: 21.99,
          description:
            "Grab some Sweet & Spicy Beef Jerkey for your Quarantine munchies!!!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Canned Soup",
          price: 4.99,
          description:
            "Go Ahead and get some Canned Soup, never know how long your gonna be Quarantined!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ramen Noodels",
          price: 0.99,
          description:
            "Get some of the all time favs, these will keep you full hiding from all them Zombies!!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Eggs",
          price: 7.99,
          description:
            "Pick you up a pack of these, during a Quarantine you can have breakfast whenever!!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cereal",
          price: 4.99,
          description:
            "Grab you a box of cereal, but be careful you'll have to worry about your Zombie roomate stealing them!!!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Protein Powder",
          price: 24.99,
          description:
            "You definetly need some of this to keep your gainzzz during the Quarantine season!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Water",
          price: 14.99,
          description: "Well duhhhh of course you were gonna get some of this!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rice",
          price: 4.99,
          description:
            "Go ahead and stock-pile some bags of this, never no how hungry your gonna get!",
          category: "food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Band Aids",
          price: 9.99,
          description:
            "Grab a box of these just in case you slip and cut your self running away from the zombies!!!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Gauze",
          price: 1.99,
          description:
            "You might need some of this, who knows when the zombies will try to attack!!!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Splints",
          price: 14.99,
          description:
            "Grab one of these just in case you break a finger fighting of those zombies!!!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Surgical Mask",
          price: 1.99,
          description:
            "I'd buy a couple of these, Zombies don't shower so you know there gonna stink!!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Gloves",
          price: 9.99,
          description:
            "Buy a pair of these. I wouldn't wanna touch a zombie with my bare hands!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Advil",
          price: 8.99,
          description:
            "Get a bottle of this! Can't be fighting a zombie with a headache right?",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Crutches",
          price: 14.99,
          description:
            "Just in case something happens and you sprain your ankle or break a leg... or could be used as a weapon!!!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Wheel Chair",
          price: 129.99,
          description:
            "Just in case you can't walk... or if your just to lazy to walk!",
          category: "medical supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Spike Bat",
          price: 29.99,
          description: "The All-Time classic zombie fighting weapon right?",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Flame Thrower",
          price: 374.99,
          description:
            "For when things get a little HEATED between you and the zombies!!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rocket Launcher",
          price: 1499.99,
          description:
            "Sometimes the zombies will make you wanna just blow them up!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Machete",
          price: 49.99,
          description:
            "For when you feel you might wanna do a little slicing and dicing!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "AK-47",
          price: 799.99,
          description:
            "When you have enough of these dang zombies and wanna just kill 'em all!!!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Chainsaw",
          price: 149.99,
          description:
            "Grab one of these and help scavange for fire wood... or use as a weapon when you don't have any ammo left!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Grenade",
          price: 99.99,
          description:
            "Throw one of these bad boys in a group full of zombies and see what happens!!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cross Bow",
          price: 99.99,
          description:
            "Help Kill zombies and Hunt animals for food from a long distance!",
          category: "weapons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Beer",
          price: 21.99,
          description:
            "For whenever you need to sit back and relax from all that zombie fighting!",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Ciggarettes",
          price: 7.99,
          description:
            "Grab a pack of these for when you take a break in between zombie attacks!!",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Radio",
          price: 89.99,
          description:
            "Just in case some people try to get some information out about the Quarantine, becasue you already know you can't listen to the Basketball game!",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Matches",
          price: 4.99,
          description:
            "To help start a fire if you happen to catch yourself stuck out in the wilderness running from zombies!",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Rope",
          price: 14.99,
          description: "Always good to have some of this lying around right?",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Tent",
          price: 74.99,
          description:
            "Just in case you get trapped outside and need to take shelter when your on the run from the zombies!",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Flash Light",
          price: 29.99,
          description:
            "You know there's not going to be any electricity during the zombie outbreak right?",
          category: "misc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Water Filter",
          price: 29.99,
          description:
            "Can't risk getting sick from drinking filty water during this Quarantine!!",
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

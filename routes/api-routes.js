// Requiring our models and passport as we've configured it
var db = require("../models");
//var passport = require("../config/passport");

module.exports = function(app) {
  //GET route for all items in cart
  app.get("/api/cart", function(req, res) {
    /* this says give me all the stuff in the cart_table, and put it in the (results)
    param, then do a res.json with the results passed inside it.. this res.json will allow 
    us to pull the (results) on the front end when we use the /api/cart key */
    db.cart_table.findAll({})
    .then(function(results) {
        res.json(results);
      })
    
  });

  
  //GET route for single cart item
  app.get("/api/cart/:id", function(req, res) {
    db.cart_table.findOne({
      where: {
        id: req.params.id
      }//,
      // include: [db.Product]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
  //POST route for saving new cart item
  app.post("/api/cart", function(req, res) {
    
    db.cart_table.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
  //POST route for saving new cart item
  app.post("/api/cart/:id", function(req, res) {
    
    db.Product.findOne({id: req.params.id})
    .then(function(results) {
      return db.cart_table.create(results[0])
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //DELETE route for deleteting items
  app.delete("/api/cart/:id", function(req, res) {
    db.cart_table.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //PRODUCTS ROUTES
  
  app.get("/api/products", function(req, res) {
    db.Product.findAll({})
    .then(function(results) {
        res.json(results);
      })
  });

  //PUT route for updating cart
  app.put("/api/products", function(req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }.then(function(dbPost) {
        res.json(dbPost);
      })
    );
  });
};

// $(function() {
//   $(".delete").on("click", function() {
//     var id = $(this).data("id");

//     $.ajax("/api/product/" + id, {
//       type: "DELETE"
//     }).then(function() {
//       console.log("deleted item", id);
//       location.reload();
//     });
//   });

//   $.ajax("/api/product", {
//     type: "POST",
//     data: newProduct
//   }).then(function() {
//     console.log("added new product");
//     location.reload();
//   });

//   $.ajax("/api/cart/" + id, {
//     type: "PUT",
//     data: updatedCart
//   }).then(function() {
//     console.log("updated cart");
//     location.assign("/cart");
//   });
// });


// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function(req, res) {
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//       email: req.user.email,
//       id: req.user.id
//     });
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(function() {
//         res.redirect(307, "/api/login");
//       })
//       .catch(function(err) {
//         res.status(401).json(err);
//       });
//   });

//   // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };

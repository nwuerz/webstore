var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated.js");
var db = require("../models");

module.exports = function(app) {
  //start(signup) page route
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //login page
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //home page
  app.get("/home", isAuthenticated, function(req, res) {
    db.Product.findAll().then(function(products) {
      // console.log(products);
      const categories = [];
      products.forEach(product => {
        if (categories.indexOf(product.dataValues.category) === -1) {
          categories.push(product.dataValues.category);
        }
      });
      res.render("index", {
        products,
        categories
      });
    });
  });

  // category route
  app.get("/category/:name", async function(req, res) {
    try {
      const categoryName = req.params.name;
      const products = await db.Product.findAll({
        where: {
          category: categoryName
        }
      });
      const productsWithImages = products.map(product => {
        return {
          ...product,
          imagePath: product.dataValues.productName
            .replace(" ", "-")
            .toLowerCase()
        };
      });

      const allProducts = await db.Product.findAll();
      const categoriesUnique = [];
      allProducts.forEach(product => {
        if (categoriesUnique.indexOf(product.dataValues.category) === -1) {
          categoriesUnique.push(product.dataValues.category);
        }
      });
      const categories = categoriesUnique.map(category => ({ name: category }));
      // const newCategories = new Set();
      // allProducts.forEach(({ dataValues: { category } }) => {
      //   console.log(category);
      //   newCategories.add(category);
      //   console.log(newCategories);
      // });
      // console.log(newCategories);
      // const categories = Array.from(newCategories, category => ({
      //   name: category
      // }));
      console.log(categories);

      res.render("category", {
        products: productsWithImages,
        category: req.params.name,
        categories
      });
    } catch (err) {
      console.log("ERR", err);
    }
  });

  // shopping cart route
  app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("./public/home-page.html");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/home", isAuthenticated, function(req, res) {
  //   res.render("index", { products: products });
  // });
  // // If user does not have an account send the to the signup page
  // app.get("/signup", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};

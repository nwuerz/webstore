// Dependencies
var Sequelize = require("sequelize");
var db = require("../config/connection");

// Create CATEGORIES table
var Category = db.define("category", {
    categoryId: Sequelize.INTEGER,
    categoryName: Sequelize.STRING
});

// Create Product Table
var Product = db.define("product", {
    productId: Sequelize.INTEGER,
    productName: Sequelize.STRING,
    categoryId: Sequelize.INTEGER
});

// Create Cart Table
var Cart_Table = db.define("cart_table", {
    productId: Sequelize.INTEGER,
    productName: Sequelize.STRING,
    categoryName: Sequelize.STRING,
    categoryId: Sequelize.INTEGER
});
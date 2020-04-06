module.exports = function(db, Sequelize) {
  var CartTable = db.define("cart_table", {
    productId: Sequelize.INTEGER,
    productName: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    categoryName: Sequelize.STRING,
    categoryId: Sequelize.INTEGER,
    userId: Sequelize.INTEGER
  });
  return CartTable;
};

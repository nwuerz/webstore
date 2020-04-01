module.exports = function(db, Sequelize) {
  var CartTable = db.define("cart_table", {
    productId: Sequelize.INTEGER,
    productName: Sequelize.STRING,
    categoryName: Sequelize.STRING,
    categoryId: Sequelize.INTEGER
  });
  return CartTable;
};

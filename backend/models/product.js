'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.Order, {
      through: models.OrderProduct
    });
  };
  return Product;
};
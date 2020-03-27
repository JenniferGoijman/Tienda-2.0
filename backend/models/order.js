'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    deliveryDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, {
      through: models.OrderProduct
    });
  };
  return Order;
};
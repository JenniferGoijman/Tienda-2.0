const {
    Order,
    Product,
    OrderProduct
} = require('../models/index.js');

const OrderController = {
    getAll(req, res) {
        Order.findAll({
                include: [Product]
            })
            .then(orders => res.send(orders))
    },
    getByPK(req, res) {
        Order.findAll({
                include: [Product],
                where: {
                    id: req.params.orderId
                }
            })
            .then(orders => res.send(orders))
    },
    insert(req, res) {
        Order.create({
                deliveryDate: req.body.deliveryDate,
                status: req.body.status
            })
            .then(order => {
                req.body.products.forEach(product => {
                    order.addProduct(product[0], { //product id
                        through: {
                            units: product[1] //unidades
                        }
                    })
                });
                res.send(order);
            });
    },
    modify(req, res) {
        Order.update({
                status: req.body.status
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(order => {
                OrderProduct.destroy({
                        where: {
                            OrderId: req.params.id
                        }
                    }).then(order => {
                        req.body.products.forEach(product => {
                            OrderProduct.create({
                                OrderId: req.params.id,
                                ProductId: product[0],
                                units: product[1]
                            })
                        })
                        res.send('La orden se ha modificado correctamente')
                    })
                    .catch(err => res.send('Ha habido un problema para modificar la orden'))
            }).catch(err => res.send('Ha habido un problema para modificar la orden'))
    },
    delete(req, res) {
        Order.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(order => {
                OrderProduct.destroy({
                    where: {
                        OrderId: req.params.id
                    }
                })
                res.send('La orden se ha eliminado correctamente')
            })
            .catch(err => res.send('Ha habido un problema para eliminar la orden'))
    }
}

module.exports = OrderController;
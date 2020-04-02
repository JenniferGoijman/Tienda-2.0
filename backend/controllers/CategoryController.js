const {
    Category,
    Sequelize
} = require('../models/index.js');
const Op = Sequelize.Op;

const CategoryController = {
    getAll(req, res) {
        Category.findAll()
            .then(categories => res.send(categories))
    },
    getByPK(req, res) {
        Category.findAll({
                where: {
                    id: req.params.categoryId
                }
            })
            .then(categories => res.send(categories))
    },
    getByQuery(req, res) {
        Category.findAll({
                where: {
                    name: {
                        [Op.like]: '%'+ req.params.query +'%'
                    }
                }
            })
            .then(categories => res.send(categories))
    },
    insert(req, res) {
        Category.create({
                name: req.body.name
            })
            .then(category => res.send({
                category,
                message: 'Categoría creada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para crear la categoría'
            }))
    },
    modify(req, res) {
        Category.update({
                ...req.body
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(category => res.send({
                category,
                message: 'Categoría modificada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para modificar la categoría'
            }))
    },
    delete(req, res) {
        Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(category => res.send({
                category,
                message: 'Categoría eliminada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para eliminar la categoría'
            }))
    }
}

module.exports = CategoryController;
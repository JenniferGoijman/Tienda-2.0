const {  Category } = require('../models/index.js');
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
    insert(req, res) {
        Category.create({
            name: req.body.name
        })
        .then(categories=>res.send(categories))
        .catch(err => res.send('problema para insertar'))
    },
    modify(req, res) {
        Category.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(categories => res.send(categories))
        .catch(err => res.send('problema para modificar'))
    },
    delete(req, res) {
        Category.destroy({
            where: {
              id: req.params.id
            }
          })
          .then(()=>res.send('El producto se ha eliminado correctamente'))
          .catch(err => res.send('problema para eliminar'))
      } 
}

module.exports = CategoryController;
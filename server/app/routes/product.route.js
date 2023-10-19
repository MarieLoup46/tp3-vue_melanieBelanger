module.exports = app => {
    const product = require('../controllers/product.controller.js')

    const router = require('express').Router()

    // Attend la réponse de la requête dans le model
    router.get('/', product.findAll)

    // relié à l'ajout d'un nouveau produit
    router.post('/', product.create)

    // relié au edit product
    router.get('/:id', product.findByPk)

    // relié au delete dans edit product
    router.delete('/:id', product.delete)

    // relié au update dans edit product
    router.put('/:id', product.update)

    app.use('/api/product', router)
}

const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {

    // Product = mon modèle - findAll -> Méthode de Sequelize
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'table not found'
        })
    })
}

// relié à l'ajout d'un nouveau produit
exports.create = (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.photo || !req.body.category) {
        res.status(400).send({
            message: 'Le nom, la description, le prix, la photo et la catégorie sont obligatoires'
        })
        // arrête le code
        return
    }

    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
    // si ça ne marche pas
    .catch(e => {
        res.status(500).send({
            message: 'Impossible d\'insérer dans la BD'
        })
    })
}

exports.findByPk = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Impossible de trouver les données'
        })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Product.destroy ({
    where: {id:id}
  })
  .then(num => {
    if (num == 1) {
      res.send ({
        message: 'Le produit a été supprimé'
      })
    } else {
      res.send ({
        message: 'Impossible de supprimer'
      })
    }
  })
  .catch(e => {
    res.status(500).send({
      message: 'Impossible de trouver les données'
    })
  })
}

exports.update = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: {id:id}
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: 'Produit mis à jour'
        })
        } else {
        res.send({
            message: 'Impossible de mettre à jour'
        })
        }
    })
    .catch(e => {
        res.status(500).send({
        message: 'Erreur de la base de données'
        })
    })
}
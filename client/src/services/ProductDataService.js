import http from '../http-common'

class ProductDataService {
  getAll () {
    // Accès au localhost
    return http.get('/product')
  }

  // Ajout du formulaire new-product dans l'inventaire 'inventory'
  create (data) {
    return http.post('/product', data)
  }

  // relié au edit product
  // va chercher dans le lien l'id qui se trouve dans le dernier slash "edit-product/1"
  get (id) {
    return http.get(`/product/${id}`)
  }

  // relié au delete dans edit product
  delete (id) {
    return http.delete(`/product/${id}`)
  }

  update (id, data) {
    return http.put(`/product/${id}`, data)
  }
}

export default new ProductDataService()

<template>
    <div>
        <div>
            <h2 class="center">Ajouter un produit</h2>
            <div v-show="message">{{ message }}</div>
        </div>
        <form className="form-add">
            <div v-if="!submitted">
                <div className="form-add-product">
                    <label for="productName">Nom du produit</label>
                    <input type="text" placeholder="Ajouter nom"  id="productName" v-model="product.name" required/>
                </div>
                <div className="form-add-product">
                    <label for="productDescription">Description</label>
                    <input type="text" placeholder="Ajouter description"  id="productDescription" v-model="product.description" required/>
                </div>
                <div className="form-add-product">
                    <label for="productPrice">Prix</label>
                    <input type="text" placeholder="Ajouter prix"  id="productPrice" v-model="product.price" required/>
                </div>
                <div className="form-add-product">
                    <label for="productPhoto">Nom de la photo</label>
                    <input type="text" placeholder="Ajouter nom"  id="productPhoto" v-model="product.photo" required/>
                </div>
                <div className="form-add-product">
                    <label for="productCategory">Catégorie</label>
                    <input type="text" placeholder="Ajouter catégorie"  id="productCategory" v-model="product.category" required/>
                </div>
                <div class="center">
                    <button class="btn" type="button" @click="saveProduct">Sauvegarder</button>
                </div>
            </div>
            <div v-else>
                <div>
                    <strong> You submitted successfully!</strong>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'addInv'],
  data () {
    return {
      // false parce que le formulaire est vide
      message: null,
      submitted: false,
      product: {
        name: null,
        description: null,
        price: null,
        photo: null,
        category: null
      }
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then(response => {
          // Va chercher l'id dans la BD
          this.product.id = response.data.id
          this.addInv(this.product)
          this.submitted = true
          // Si un message existait, on doit l'effacer
          this.message = null
        })
        // si ça ne marche pas
        .catch(error => {
          // message correspond au message dans product.controller
          this.message = error.response.data.message
        })
    }
  }
}
</script>

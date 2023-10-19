<template>
    <div>
        <div>
            <h2 class="center">Mise à jour</h2>
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
                    <button class="btn" type="button" @click="updateProduct">Sauvegarder</button>
                    <button class="btn btn-delete" type="button" @click="deleteProduct">Supprimer</button>

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
  // props contient le tableau des produits modifiés
  props: ['inventory', 'updateInv', 'removeInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.updateInv(this.productIndex, this.product)
          this.message = response.data.message
        })
    },
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.removeInv(this.productIndex)
          this.$router.push({ name: 'home' })
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}
</script>

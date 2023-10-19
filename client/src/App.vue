<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li> |
        <li><router-link to="/product-list">Produits</router-link></li> |
        <li><router-link to="/new-product">Ajouter produit</router-link></li>
      </ul>
    </nav>

    <header>
      <h1>Clic Chaussures</h1>
    </header>
    <router-view
    :inventory = "inventory"
    :addInv = "addInventory"
    :removeInv = "removeInventory"
    :updateInv = "updateInventory"
    />
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
// import product from '@/products.json'

export default {
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory (data) {
      console.log(data)
      this.inventory.push(data)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].nom = data.nom
      this.inventory[index].description = data.description
      this.inventory[index].prix = data.prix
      this.inventory[index].photo = data.photo
      this.inventory[index].categorie = data.categorie
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  }
}
</script>

<template>
  <div>
    <div>
      <h2 class="center">Liste des produits</h2>
    </div>

    <div class="flex-container">
        <div v-for="(product, i) in inventory" :key="i">
          <article>
            <router-link :to="{ name: 'product', params: {id:product.id} }"><h3>{{ product.name }}</h3></router-link>
            <img class="image-product" :src="require(`@/assets/img/products/${product.photo}`)" :alt="product.nom" />
            <ul>
              <li>Prix : {{ product.price }} $</li>
              <li>Catégorie : {{ product.category }}</li>
            </ul>
            <router-link :to="{ name: 'edit-product', params: {id:product.id} }"><button class="btn-product-update" type="button">Mise à jour</button></router-link>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  // props contient le tableau des produits modifiés
  props: ['inventory']
}
</script>

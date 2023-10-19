<template>
  <div>
    <div>
      <h2 class="center">Liste des produits</h2>
    </div>

    <div class="container">
        <div>
          <article>
            <h3>{{ product.name }}</h3>

            <img class="image-product" :src="require(`@/assets/img/products/${product.photo}`)" :alt="product.name" />

            <ul>
              <li>Code : {{ product.id }}</li>
              <li>Description : {{ product.description }}</li>
              <li>Prix : {{ product.price }} $</li>
              <li>Catégorie : {{ product.category }}</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['inventory']
}
</script>

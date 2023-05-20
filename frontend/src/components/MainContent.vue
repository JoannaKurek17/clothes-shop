<script setup>
import Product from "./Product.vue"
import ProductService from "../services/ProductService";
import { ref, onMounted } from "vue";

const products = ref([]);
const loading = ref(true);

async function getProductsDetails() {
    const response = await ProductService.getProducts();
    products.value = response.data;
}

onMounted(async () => {
    await getProductsDetails();
    loading.value = false
});

</script>
<template>
    <div class="main">
        <div class="products">
            <p v-if="loading">Ładowanie...</p>
            <Product v-if="!loading" :data="value" v-for="value in products"></Product>
        </div>
    </div>
</template>
<style>
.main {
    display: flex;
    flex: 1
}

.products {
    display: flex;

}

.products>* {
    margin: 10px;
}
</style>
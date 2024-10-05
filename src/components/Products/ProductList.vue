<!--  Componente para puxar todos os produtos -->
<template>
    <div>
        <ProductCard 
            v-for="product in $store.state.availableProducts"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard
    }
}
</script>
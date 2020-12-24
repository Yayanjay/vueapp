<template>
    <div class="wadah">
        <div class="card card-cont" style="margin: 10px">
            <img :src="image" class="card-img-top" :alt="name">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <p class="card-text">{{price}}</p>
                <a href="#" @click="addToCart(item)" class="btn btn-primary" >Add to Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",
    props: {
        image: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    }
}
</script>

<style>
.wadah {
    display: flex;
    flex-wrap: wrap;
}

</style>
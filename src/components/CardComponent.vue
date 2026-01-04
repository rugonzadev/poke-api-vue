<script setup>
import { ref } from 'vue'

//copy pokemon props for editable version
const props = defineProps({
    pokemon: Array
})

//reactive local state
//currentImg: image to display (normal or shiny)
const localPokemon = ref(
    props.pokemon.map(f => ({
    ...f, 
    currentImg: f.sprites.front_default,
    }))
)

//shiny mouse enter
function shiny(f) {
    f.currentImg = f.sprites.front_shiny
}

//normal mouse out
function normal(f) {
    f.currentImg = f.sprites.front_default
}
</script>

<template>
    <!--card container for Pokémon forms-->
    <div class="card">
        <!--render each form with hover effect-->
        <div v-for="(f, index) in localPokemon" :key="index" @mouseenter="shiny(f)" @mouseleave="normal(f)">
            <img :src="f.currentImg" :alt="f.name" />
            <span>{{ f.name }}</span>
        </div>
    </div>
</template>


<style>
    .card {
    display: flex;
    gap: 10px;
    background-color: antiquewhite;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    flex-wrap: wrap;
}

.card div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.card div:hover img{
    transform: scale(1.2);
}

span{
    text-transform: capitalize;
}

</style>
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
    <!--just display basic form of pokemon, simple render-->
    <div class="card" v-if="localPokemon.length">
        <div @mouseenter="shiny(localPokemon[0])" @mouseleave="normal(localPokemon[0])">
            <img v-if="localPokemon[0].currentImg" :src="localPokemon[0].currentImg"/>
            <span>{{ localPokemon[0].name }}</span>
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
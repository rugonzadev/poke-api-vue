<script setup>
import { ref } from 'vue'

const props = defineProps({
    pokemon: Array
})

// Hacemos una copia reactiva
const localPokemon = ref(
    props.pokemon.map(f => ({
    ...f, 
    currentImg: f.sprites.front_default,
    nameCapitalized: f.name.charAt(0).toUpperCase()+ f.name.slice(1)
    }))
)

// Función para cambiar a shiny
function shiny(f) {
    f.currentImg = f.sprites.front_shiny
}

// Función para volver a normal
function normal(f) {
    f.currentImg = f.sprites.front_default
}
</script>

<template>
    <div class="card">
        <div v-for="(f, index) in localPokemon" :key="index" @mouseenter="shiny(f)" @mouseleave="normal(f)">
            <img :src="f.currentImg" :alt="f.name" />
            <span>{{ f.nameCapitalized }}</span>
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

</style>
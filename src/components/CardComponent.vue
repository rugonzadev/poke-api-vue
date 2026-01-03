<script setup>
    defineProps({
        pokemon: Object
    })
</script>

<template>
    <div class="card">
        <img :src="pokemon.sprites.front_default">
        <p>{{ pokemon.name }}</p>
    </div>
</template>

<style>
    .card{
        display: flex;
        background-color: antiquewhite;
        align-items: center;
        justify-content: center;
        width: 35%;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>
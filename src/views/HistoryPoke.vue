<script setup>
    import HeaderNav from '../components/HeaderNav.vue';
    import CardComponent from '../components/CardComponent.vue';
    import { usePokeHistory } from '../stores/pokeHistory';
    const pokeStore = usePokeHistory();
</script>

<template>
    <HeaderNav></HeaderNav>
    <fieldset>
        <button @click="pokeStore.resetPoke" id="reset">Reset!</button>
    </fieldset>
    <div id="gallery">
        <!--render a card for each pokemon in the list-->
        <CardComponent v-for="(p, index) in pokeStore.pokemonList" :key="index" :pokemon="p"/>
    </div>
</template>

<style>
    #gallery{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
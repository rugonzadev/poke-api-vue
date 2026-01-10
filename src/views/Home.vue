<script setup>
    //Composition API
import { onMounted, ref } from 'vue';
import HeaderNav from '../components/HeaderNav.vue';
import { usePokeHistory } from '../stores/pokeHistory';
import PokedexComponent from '../components/PokedexComponent.vue';

//reactive variables
let pokemonName = ref("")
let poke = ref([]);
const pokeStore = usePokeHistory();

async function search(){
    poke.value = await pokeStore.findPoke(pokemonName.value);
}

//persistance, last poke searched
onMounted(()=>{
    poke.value = pokeStore.pokemonList[pokeStore.pokemonList.length-1];
})

</script> 

<template>
    <!--Header component-->
    <HeaderNav></HeaderNav>
    <fieldset>
        <label for="pokemonName">Pokemon Name</label>
        <input type="text" id="pokemonName" v-model.lazy="pokemonName" placeholder="write here the Pokemon name">
        <!--Buttons to search and reset the Pokémon list -->
        <button @click="search" id="search">Search!</button>
    </fieldset>
    <PokedexComponent :pokemon="poke"></PokedexComponent>
    
</template>

<style>
    
    fieldset {
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-self: center;
    text-align: center;
    padding: 2vh;
    gap: 1rem;
    margin-bottom: 3vh;
}

    input {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: 1px solid #ccc;
        font-size: 1rem;
        outline: none;
        transition: border 0.2s;
    }

    input:focus {
        border-color: #007bff;
    }

    button {
        padding: 0.6rem 1.2rem;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
        color:black;
        background: wheat;
    }

    #search:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        background: greenyellow;
    }

    #reset:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        color: rgb(228, 56, 56);
        background: rgb(255, 216, 43);
    }

    button:active {
        transform: scale(0.9);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
</style>

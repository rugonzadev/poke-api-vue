<script setup>
    //Composition API
import { ref } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import CardComponent from './components/CardComponent.vue';

let pokemonName = ref("")
let pokemonList = ref([])
async function findPoke() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const urlFallBack = "https://pokeapi.co/api/v2/pokemon-species/"
    try{
        let response = await fetch(url+pokemonName.value);
        let myData = await response.json();
        pokemonList.value.push(myData);
    }catch (error){
        try{
            let response1 = await fetch(urlFallBack+pokemonName.value);
        let myData = await response1.json();
        let response2 = await fetch(myData.varieties[0].pokemon.url)
        let myData2 = await response2.json();
        pokemonList.value.push(myData2);
        } catch (error){
            console.error("Poke not found")
        }
        
    }
}

</script> 

<template>
    <HeaderNav></HeaderNav>
    <fieldset>
        <label for="pokemonName">Pokemon Name</label>
        <input type="text" id="pokemonName" v-model.lazy="pokemonName" placeholder="write here the Pokemon name">
        <button @click="findPoke">Search!</button>
    </fieldset>
    
    <div id="gallery">
        <CardComponent v-for="(p, index) in pokemonList" :key="index" :pokemon="p"/>
    </div>
</template>

<style>
    fieldset{
        background-color: white;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        width: 50vw;
        justify-self: center;
        text-align: center;
        padding: 2vh;
        margin-bottom: 3vh;
    }

    #gallery{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>

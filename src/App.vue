<script setup>
    //Composition API
import { ref } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import CardComponent from './components/CardComponent.vue';

//reactive variables
let pokemonName = ref("")
let pokemonList = ref([])

//main API fetch function
async function findPoke() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    //multyple forms pokemon only appear in pokemon-species endpoint
    const urlFallBack = "https://pokeapi.co/api/v2/pokemon-species/"
    try{
        //fetch pokemon from standart endpoint
        let response = await fetch(url+pokemonName.value.toLowerCase().trim());
        let myData = await response.json();
        //wrap single pokemon in an array for uniform display
        let poke =[]
        poke.push(myData)
        pokemonList.value.push(poke);
    }catch (error){
        //if not found fetch from species enpoint to get multyple forms
        let response1 = await fetch(urlFallBack + pokemonName.value.toLowerCase().trim());
        let myData1 = await response1.json();

        let poke = [];

        for (let form of myData1.varieties) {
            const response2 = await fetch(form.pokemon.url);
            const myData2 = await response2.json();
            poke.push(myData2);
        }
        //store as array of forms for uniform display
        pokemonList.value.push(poke);
        
    }
}

//reset function
function resetPoke(){
    pokemonList.value = []
}

</script> 

<template>
    <!--Header component-->
    <HeaderNav></HeaderNav>
    <fieldset>
        <label for="pokemonName">Pokemon Name</label>
        <input type="text" id="pokemonName" v-model.lazy="pokemonName" placeholder="write here the Pokemon name">
        <!--Buttons to search and reset the Pokémon list -->
        <button @click="findPoke" id="search">Search!</button>
        <button @click="resetPoke" id="reset">Reset!</button>
    </fieldset>
    
    <div id="gallery">
        <!--render a card for each pokemon in the list-->
        <CardComponent v-for="(p, index) in pokemonList" :key="index" :pokemon="p"/>
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

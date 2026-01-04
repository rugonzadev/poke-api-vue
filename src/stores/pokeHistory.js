import { defineStore } from "pinia";
import { ref } from "vue";

//now all the poke data and fect funcion goes in global store using pinia

export const usePokeHistory = defineStore("pokeHistory", ()=>{
    let pokemonList = ref([]);
    let poke = ref([]);

    //main API fetch function
    async function findPoke(pokemonName) {
        const url = "https://pokeapi.co/api/v2/pokemon/"
        //multyple forms pokemon only appear in pokemon-species endpoint
        const urlFallBack = "https://pokeapi.co/api/v2/pokemon-species/"
        try{
            poke = [];
            //fetch pokemon from standart endpoint
            let response = await fetch(url+pokemonName.toLowerCase().trim());
            let myData = await response.json();
            //wrap single pokemon in an array for uniform display
            poke.push(myData)
            pokemonList.value.push(poke);
            return poke;
        }catch (error){
            //if not found fetch from species enpoint to get multyple forms
            let response1 = await fetch(urlFallBack + pokemonName.toLowerCase().trim());
            let myData1 = await response1.json();

            for (let form of myData1.varieties) {
                const response2 = await fetch(form.pokemon.url);
                const myData2 = await response2.json();
                poke.push(myData2);
            }
            //store as array of forms for uniform display
            pokemonList.value.push(poke);
            return poke;
        }
    }

    //reset function
    function resetPoke(){
        pokemonList.value = []
    }

    return{
        pokemonList,
        findPoke,
        resetPoke
    }
})
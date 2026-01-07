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

            //adding all different forms that appear in other endpoints (mega-evolution, regional forms...)
            for (const variety of myData.varieties) {
                let responseInfo = await fetch(variety.url)
                let info = await responseInfo.json()
                console.log(info)
                variety.push(...info)
            }
            
            //fetch pokemon from species endpoint to get more data
            let response1 = await fetch(urlFallBack + pokemonName.toLowerCase().trim());
            let myData1 = await response1.json();

            //wrap single pokemon in an array for uniform display
            poke.push(myData)
            poke = poke.map(p => ({
            ...p, 
            ...myData1
            }))

            pokemonList.value.push(poke);
            return poke;
        }catch (error){
            //if not found fetch from species enpoint to get multyple forms
            let response2 = await fetch(urlFallBack + pokemonName.toLowerCase().trim());
            let myData2 = await response2.json();

            for (let form of myData2.varieties) {
                const response3 = await fetch(form.pokemon.url);
                const myData3 = await response3.json();
                poke.push(myData3);

                poke = poke.map(p => ({
                ...p, 
                ...myData2
                }))
            }
            console.log(poke)
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
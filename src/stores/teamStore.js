import { defineStore } from "pinia";
import { ref } from "vue";

//team Store

export const useTeamStore = defineStore("teamStore", ()=>{
    let team = ref([]);
    let warnings = ref([])

    function saveTeam(poke){
        if(team.value.length == 6){
            team.value.shift()
        }
        console.log(poke)
        team.value.push(poke)
    }

    //feature in progress: simple team warnings
    function evalTeam(){
        warnings.value = []
        warnings.value.push(evalSize());
        if(team.value.length > 0) warnings.value.push(evalTypes());
        evalStats();
    }

    //warning: pokemon size < 6
    function evalSize(){
        return`Your team's size is ${team.value.length}/6`
    }

    //warning: repeated pokemon types
    function evalTypes() {
        const teamTypes = new Set()
        const repeatedTypes = new Set()

        team.value.forEach(pokemon => {
            const localTypes = new Set()

            pokemon.types.forEach(t => {
                const typeName = t.type.name

                if (teamTypes.has(typeName)) {
                repeatedTypes.add(typeName)
                }

                localTypes.add(typeName)
            })
            

            localTypes.forEach(t => teamTypes.add(t))
        })
        if(repeatedTypes.size > 0){
            return `Warning: your team has repeated types -> ${[...repeatedTypes]}`
        } else{
            return `Your team types are balanced -> ${[...teamTypes]}`
        }
    }

    //warning: team stats
    function evalStats(){
        team.value.forEach(p=>{
            console.log(p)
        })
    }



    return{
        team,
        warnings,
        saveTeam,
        evalTeam
    }
})
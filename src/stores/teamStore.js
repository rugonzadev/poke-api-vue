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
        team.value.push(poke)
    }

    //feature in progress: simple team warnings
    function evalTeam(){
        warnings.value = []
        warnings.value.push(evalSize());
        warnings.value.push(evalTypes());
    }

    //warning: pokemon size < 6
    function evalSize(){
        if (team.value.length < 6) return`Your team's size is ${team.value.length}/6`
    }

    //warning: repeated pokemon types
    function evalTypes() {
        const teamTypes = new Set()
        const repeatedTypes = new Set()

        team.value.forEach(pokemonForms => {
            const localTypes = new Set()

            pokemonForms.forEach(form => {
            form.types.forEach(t => {
                const typeName = t.type.name

                if (teamTypes.has(typeName)) {
                repeatedTypes.add(typeName)
                }

                localTypes.add(typeName)
            })
            })

            localTypes.forEach(t => teamTypes.add(t))
        })
        if(repeatedTypes.size > 0) return `Warning: your team has repeated types -> ${[...repeatedTypes]}`
    }



    return{
        team,
        warnings,
        saveTeam,
        evalTeam
    }
})
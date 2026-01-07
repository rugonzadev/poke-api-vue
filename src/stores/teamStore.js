import { defineStore } from "pinia";
import { ref } from "vue";

//team Store

export const useTeamStore = defineStore("teamStore", ()=>{
    let team = ref([]);

    function saveTeam(poke){
        if(team.value.length == 6){
            team.value.shift()
        }
        team.value.push(poke)
    }

    return{
        team,
        saveTeam
    }
})
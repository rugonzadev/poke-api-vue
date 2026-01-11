<script setup>
import { useTeamStore } from '../stores/teamStore'
import { computed } from 'vue'

const props = defineProps({
  pokemon: Array
})

const teamStore = useTeamStore()

//find only english description
const englishDescription = computed(() => {
  return props.pokemon[0].flavor_text_entries.find(d => d.language.name === 'en').flavor_text
})
</script>


<template>
    <!--render one pokemon data like a pokedex-->
    <div v-if="pokemon && pokemon.length > 0" class="pokedex-card">
        
        <h2 class="pokemon-name">{{ pokemon[0].name }}</h2>
        <!--render types-->
        <div class="types">
            <span v-for="(t, index) in pokemon[0].types" :key="index" class="type">
                {{ t.type.name }}
            </span>
        </div>
        <div class="main-sprite">
        <img :src="pokemon[0].sprites.front_default" :alt="pokemon[0].name" />
        </div>

        <h3>{{ pokemon[0].generation.name }} </h3>
        <!--render english description -->
        <p class="description">
            {{ englishDescription }}
        </p>

        <!--render cry-->
        <audio
            :src= "pokemon[0].cries.latest"
            controls
        ></audio>     

        <!--fix: some poke forms have no data-->
        <div class="forms" v-for="(f, index) in pokemon.filter(f=>f.forms.length>0)" :key="index">
            <button @click="teamStore.saveTeam(f)">Add {{ f.forms[0].name }} to my Team</button>
            <h3 v-if="f.forms.length>0">Form: {{ f.forms[0].name }}</h3>
            <div class="sprites">
                <!--only render if sprite exists-->
                <img v-if="f.sprites.front_default" :src="f.sprites.front_default" alt="Front" />
                <img v-if="f.sprites.back_default" :src="f.sprites.back_default" alt="Back" />
                <img v-if="f.sprites.front_shiny" :src="f.sprites.front_shiny" alt="Front Shiny" />
                <img v-if="f.sprites.back_shiny" :src="f.sprites.back_shiny" alt="Back Shiny" />
            </div>
            <div class="types">
                <span v-for="(t, index) in f.types" :key="index" class="type">
                    {{ t.type.name }}
                </span>
            </div>

            <h3>Abilities:</h3>
            <!--render abilities-->
            <div class="abilities">
                <span v-for="(a, index) in f.abilities" :key="index" class="ability">
                    {{ a.ability.name }}
                </span>
            </div>

            <h3>Stats:</h3>
            <!--render stats-->
            <div class="stats">
                <p v-for="(s, index) in f.stats" :key="index" class="stat">
                    {{ s.stat.name }} : {{ s.base_stat }}
                </p>
            </div>  
        </div>
    </div>
</template>

<style>
.pokedex-card {
    max-width: 500px;
    background-color: #f5f5f5;
    border: 3px solid #ff0000;
    border-radius: 12px;
    padding: 20px;
    margin: 20px auto;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.pokemon-name {
    text-transform: capitalize;
    font-size: 2rem;
    color: #ff0000;
    margin-bottom: 10px;
}

.main-sprite img {
    width: 150px;
    height: 150px;
    }

.types {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 10px 0;
}

.type {
    background-color: #000000;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    text-transform: capitalize;
}

.abilities {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 10px 0;
}

.ability {
    background-color: #ffd700;
    padding: 5px 10px;
    border-radius: 8px;
    text-transform: capitalize;
}

.forms {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
}

.forms h3 {
    text-transform: capitalize;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 5px;
}

.sprites {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.sprites img {
    width: 80px;
    height: 80px;
}
</style>

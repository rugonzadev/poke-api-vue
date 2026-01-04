<script setup>
defineProps({
    pokemon: Array
})

</script>

<template>
    <!--render one pokemon data like a pokedex-->
    <div v-if="pokemon && pokemon.length > 0" class="pokedex-card">
        <h2 class="pokemon-name">{{ pokemon[0].name }}</h2>

        <div class="main-sprite">
        <img :src="pokemon[0].sprites.front_default" :alt="pokemon[0].name" />
        </div>

        <div class="description">
            <p>{{ pokemon[0].name }}</p>
        </div>

        <h3>Abilities:</h3>
        <div class="abilities">
        <span v-for="(a, index) in pokemon[0].abilities" :key="index" class="ability">
            {{ a.ability.name }}
        </span>
        </div>

        <div class="forms" v-for="(f, index) in pokemon" :key="index">
        <h3>Form: {{ f.name }}</h3>
        <div class="sprites">
            <img :src="f.sprites.front_default" alt="Front" />
            <img :src="f.sprites.back_default" alt="Back" />
            <img :src="f.sprites.front_shiny" alt="Front Shiny" />
            <img :src="f.sprites.back_shiny" alt="Back Shiny" />
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

<script setup>

//copy pokemon props for editable version
defineProps({
    pokemon: Object
})
</script>

<template>
    <!--just display basic form of pokemon, simple render-->
    <div class="team" v-if="pokemon">
        <div class="teamMember">
            <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default"/>
            <span>{{ pokemon.forms[0].name }}</span>
        </div>
    </div>
</template>

<style>
    .team {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
        margin: 16px 0;
    }

    .teamMember {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #cab9b946;
        padding: 10px;
        border-radius: 12px;
        box-shadow: 0 3px 8px rgba(0,0,0,0.35);
        width: 100px;
    }

    .teamMember img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-bottom: 6px;
    }

    .teamMember span {
        color: #f5f5f5;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 0.9rem;
        text-align: center;
    }

</style>
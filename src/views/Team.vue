<script setup>
    import HeaderNav from '../components/HeaderNav.vue';
    import CardComponent from '../components/CardComponent.vue';
    import { useTeamStore } from '../stores/teamStore';
    const teamStore = useTeamStore();
</script>

<template>
    <HeaderNav></HeaderNav>
    <div id="gallery">
        <!--render a card for each pokemon in the list-->
        <CardComponent v-for="(p, index) in teamStore.team" :key="index" :pokemon="p"/>
    </div>
    <button @click="teamStore.evalTeam">Eval my team!</button>
    <ul id="warnings">
        <li v-for="(w, index) in teamStore.warnings" :key="index">
            {{ w }}
        </li>
    </ul>
</template>

<style>
    #warnings{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        color: azure;
        background-color: black;
        text-align: center;
        align-self: center;
    }
</style>
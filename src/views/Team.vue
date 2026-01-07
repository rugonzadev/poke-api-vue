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
</template>

<style></style>
<script setup>
    import HeaderNav from '../components/HeaderNav.vue';
    import CardComponent from '../components/CardComponent.vue';
    import { useTeamStore } from '../stores/teamStore';
import TeamComponent from '../components/TeamComponent.vue';
    const teamStore = useTeamStore();
</script>

<template>
    <HeaderNav></HeaderNav>
    <div id="gallery">
        <!--render a card for each pokemon in the list-->
        <TeamComponent v-for="(p, index) in teamStore.team" :key="index" :pokemon="p"/>
    </div>

    <button id="eval" @click="teamStore.evalTeam">Eval my team!</button>
    <ul v-if="teamStore.warnings.length" id="warnings">
        <li v-for="(w, index) in teamStore.warnings" :key="index">
            {{ w }}
        </li>
    </ul>
</template>

<style>
    #warnings {
        margin: 12px auto;
        padding: 12px 18px;
        max-width: 420px;

        display: flex;
        flex-direction: column;
        gap: 8px;

        list-style: none;
        text-align: center;

        background: #1c1c1c;
        color: #f5f5f5;

        border: 2px solid #ffcc00;
        border-radius: 12px;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        font-size: 0.95rem;
    }

    #warnings li {
        padding: 6px 10px;
        border-radius: 8px;

        background: rgba(255, 204, 0, 0.12);
        border: 1px solid rgba(255, 204, 0, 0.4);

        font-weight: 500;
    }
    #eval {
        margin: 16px auto;
        padding: 10px 22px;

        display: block;

        background: linear-gradient(135deg, #7cadc4, #030116);
        color: white;

        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.5px;

        border: none;
        border-radius: 14px;

        cursor: pointer;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
</style>
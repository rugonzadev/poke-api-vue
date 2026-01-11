<script setup>
    import { useTeamStore } from '../stores/teamStore';
    const teamStore = useTeamStore();
</script>

<template>
    <header class="header">
        <h1>PokeApi</h1>
        <nav>
            <ul>
                <!--using vue-router-->
                <li>
                    <RouterLink to="/" class="link">Search</RouterLink>
                </li>

                <li>
                    <RouterLink to="/history" class="link">History</RouterLink>
                </li>

                <li>
                    <RouterLink to="/team" class="link">My Team ({{ teamStore.team.length }})</RouterLink>
                </li>
                
            </ul>
        </nav>
    </header>
</template>

<style>
    header{
        margin: 2vh;
        padding: 1em;
        text-align: center;
        background-color: rgb(107, 6, 26);
        color: white;
        border-radius: 10px;
        border: 4px solid black;
        box-shadow: 1px 1px 10px black;
    }
    header ul{
        margin-top: 2vh;
        display: flex;
        align-content: center;
        justify-content: space-around;
        list-style: none;
    }

    header ul li{
    padding: 2vh;
    border-radius: 10px;
    }

    header ul li:hover{
        background-color: crimson;
        box-shadow: 0 0 3px black;
    }

    .link{
        color: white;
    }
</style>
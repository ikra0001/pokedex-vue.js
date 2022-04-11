<template>
<div class="row">
    <div class="col">
        <h1 class="display-4">Pokedex</h1>
    </div>
</div>
<div class="row">
    <div 
    class="col col-6 col-md-4 col-lg-3 mb-3"
    v-for="(pokemon, index) in pokedex"
    :key="index">
    <router-link class="text-decoration-none" :to="'/pokemon/' + pokemon.name">
    <h2>{{ pokemon.name }}</h2>
    </router-link>
    </div>
</div>
</template>



<script>
export default {
    name: 'Pokedex',
    data: function () {
        return {
            pokedex: []
        }
    },
    created: function () {
        fetch( 'https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(json => this.pokedex = json.results)
    }
}
</script>



<style>

</style>
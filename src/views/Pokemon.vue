<template>
<div class="row">
    <div class="col">
        <h1 class="display-4">{{ pokemon.name }}</h1>
    </div>
</div>
<div class="row">
    <div class="col">
        <img class="img-fluid" :src="pokemon.image" alt="pokemon.name">
    </div>
</div>
</template>



<script>
export default {
    name: 'Pokemon',
    props: ['name'],
    data: function () {
        return {
            pokemon: {
                name: '',              // work around an error while waiting for fetch data
                id: 0,
                image: '',
                abilities: []
            }
        }
    },
    created: function () {
     if (this.name) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.name)
        .then(response => response.status === 200 ? response.json() : this.$router.push('/'))
        .then(json => {
            this.pokemon.name = json.name
            this.pokemon.id = json.id
            this.pokemon.image = json.sprites.other['official-artwork'].front_default
            this.pokemon.abilities = json.abilities
        })
     } else {
         this.$router.push('/')             //send to homepage 
        }
    }
}
</script>



<style>

</style>
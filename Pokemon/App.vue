<template>
    <div 
        class="cards"
    >
      <card
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      > 
      <template v-slot:title>
          {{pokemon.name}}
       </template>
       <template v-slot:content>
           <img :src="pokemon.sprite" >
       </template>
       <template v-slot:description>
           <div v-for="type in pokemon.types" :key="type">
                {{type}}
            </div>
       </template>
        
      </card> 
    </div>
    
</template>

<script>
const api='https://pokeapi.co/api/v2/pokemon'
const id=[1,4,7,10,13,16,19,22,25,28,31,34,37]

import Card from './Card.vue'

export default {
    components:{
        Card
    },
    created(){
        this.fetchData()
    },
    data(){
        return{
            pokemons:[]
        }
    },
    methods:{
       async fetchData(){
           const responses =await Promise.all(
               id.map(id => window.fetch(`${api}/${id}`))
            )
           const json = await Promise.all(
               responses.map(data => data.json())
           )
           this.pokemons=json.map(datum=>({
               id: datum.id,
               name: datum.name,
               sprite: datum.sprites.other['official-artwork'].front_default,
               types:datum.types.map(type=>type.type.name)
           }))
           console.log(this.pokemons)
        }
    }
}
</script>

<style scoped>
    .cards{
        display: flex;
    }
    img{
    width: 100%;
    }
</style>

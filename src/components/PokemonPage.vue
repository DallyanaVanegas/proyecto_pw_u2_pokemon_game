<template>
  <PokemonPicture :pokemonId = "16" :mostrarPokemon = "false"/>
  <PokemonOptions :pokemon = "pokemonArr" />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "../helpers/obtenerOpcionesPokemon"

//getPokemonOptions()

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data(){
    return {
      pokemonArr:[]
    }
  },
  methods:{
    async obtenerPokemonsArray(){
      this.pokemonArr = await getPokemonOptions()
      console.log("impresion desde el page")
      console.log(this.pokemonArr)
    }
  },
  mounted(){
    this.obtenerPokemonsArray()
  }
};
</script>

<style>
</style>
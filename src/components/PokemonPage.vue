<template>
<h1 v-if="!pokemonCorrecto"> Porfavor espere...</h1>
  <div v-else>
    <PokemonPicture
      :pokemonId="pokemonCorrecto.id"
      :mostrarPokemon="mostrarPokemon"
    />
    <PokemonOptions :pokemon="pokemonArr" />
  </div>
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
      pokemonArr:[],
      pokemonCorrecto: null,
      mostrarPokemon: false

    }
  },
  methods:{
    async obtenerPokemonsArray(){
      this.pokemonArr = await getPokemonOptions()
      console.log("impresion desde el page")
      console.log(this.pokemonArr)
      const numeroAleatorio = Math.floor(Math.random()*4)
      this.pokemonCorrecto = this.pokemonArr[numeroAleatorio]
    }
  },
  mounted(){
    this.obtenerPokemonsArray()
  }
};
</script>

<style>
</style>
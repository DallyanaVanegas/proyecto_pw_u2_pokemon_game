<template>
  <PokemonPicture :pokemonId = "16" :mostrarPokemon = "false"/>
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style>
</style>
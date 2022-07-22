<template>
  <div class="pokemon-container">
    <h1>¿Quién es ese pókemon?</h1>
    <img
      class="pokemon-oculto"
      v-bind:src="imagenFuente"
      alt="No existe la imagen"
    />
    <img
      v-if="mostrarPokemon"
      v-bind:src="imagenFuente"
      alt="No existe la imagen"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
.pokemon-oculto {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 40%;
}
.pokemon-container {
  height: 280px;
}
</style>
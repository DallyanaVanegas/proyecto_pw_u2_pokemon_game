<template>
  <h1 v-if="!pokemonCorrecto">Porfavor espere...</h1>
  <div v-else>
    <PokemonPicture
      :pokemonId="pokemonCorrecto.id"
      :mostrarPokemon="mostrarPokemon"
    />
    <PokemonOptions
      :pokemon="pokemonArr"
      @eventoHijo="validarRespuesta($event)"
    />
    <div v-if="mostrarMensaje">
      <h1>{{ mensaje }}</h1>
      <button v-on:click="resetearJuego">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "../helpers/obtenerOpcionesPokemon";

//getPokemonOptions()

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      mostrarPokemon: false,
      mensaje: "",
      mostrarMensaje: false,
    };
  },
  methods: {
    async cargarPokemonInicial() {
      this.pokemonArr = await getPokemonOptions();
      console.log("impresion desde el page");
      console.log(this.pokemonArr);
      const numeroAleatorio = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[numeroAleatorio];
    },
    validarRespuesta(datoHijo) {
      const idPoke = datoHijo.par1
      const namePoke = datoHijo.par2
      console.log("se emitio un evento desde el hijo");
      console.log(datoHijo);
      if (this.pokemonCorrecto.id === idPoke) {
        this.mensaje = `Correcto es: ${this.pokemonCorrecto.nombre}`;
        console.log("correcto");
        console.log(namePoke)
        this.mostrarPokemon = true;
      } else {
        this.mensaje = `Incorrecto el pókemon correcto es: ${this.pokemonCorrecto.nombre}`;
        console.log("incorrecto");
      }
      this.mostrarMensaje = true;
    },
    resetearJuego() {
      this.pokemonArr = [];
      this.pokemonCorrecto = null;
      this.mostrarPokemon = false;
      this.mensaje = "";
      this.mostrarMensaje = false;
      this.cargarPokemonInicial()
    },
  },
  mounted() {
    this.cargarPokemonInicial();
  },
};
</script>

<style>
</style>
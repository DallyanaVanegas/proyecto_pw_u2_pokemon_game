<template>
  <div>
    <input v-model="numero" type="text" placeholder="Ingresa un número" />
    <button v-on:click="obtenerRespuesta">Click Aquí!</button>
  </div>
  

  <table>
    <tr>
      <td>
        <h2>{{ nombre }}</h2>
      </td>
    </tr>
    <tr>
      <td>
        <img v-if="imagen" v-bind:src="imagen" alt="no encontrado" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      numero: null,
      nombre: null,
      imagen: null,
    };
  },
  methods: {
    async obtenerNombre() {
      const { name } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + this.numero
      ).then((r) => r.json());
      this.nombre = name;
    },
    obtenerImagen() {
      this.imagen =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.numero +
        ".svg";
    },
    async obtenerRespuesta() {
      this.obtenerNombre();
      this.obtenerImagen();
    },
  },
};
</script>

<style>
button {
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 8px 2px;
  cursor: pointer;
}

table{
  align-content: center;
}
table {
  margin: auto;
}
div {
  align-content: center;
}

h2 {
  text-transform: uppercase;
}
</style>
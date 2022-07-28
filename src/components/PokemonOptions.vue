<template>
  
  <div class="option-container">
    <ul>
      <li v-for="pokemon in pokemonArr" :key="pokemon.id"> {{pokemon.monbre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pokemon:{
      type: Array,
      required: true
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  font-size: 16px;
}
li {
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 300px;
  margin-top: 8px;
  cursor: pointer;
  
}
li:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.option-container{
    justify-content: center;
    display: flex;
}
</style>
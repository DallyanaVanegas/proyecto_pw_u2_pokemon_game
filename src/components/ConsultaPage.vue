<template>
  <div class="div1">
    <table>
      <tr>
        <td>
          <label for="">Ingrese una IP:</label>
        </td>
        <td>
          <input
            type="text"
            placeholder="Ingrese IP pública"
            v-model="ipIngresado"
            style="text-align: center"
          />
        </td>
      </tr>
    </table>
    <button type="button" v-on:click="consultarIp()">Consultar</button>
  </div>
  <div class="div2" v-if="tipo">
    <table class="table1">
      <tr >
        <td class="a"><label for="">Tipo: </label></td>
        <td class="b">
          <p>{{ tipo }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">Continente: </label></td>
        <td class="b">
          <p>{{ continente }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">País: </label></td>
        <td class="b">
          <p>{{ pais }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">Región: </label></td>
        <td class="b">
          <p>{{ region }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">Ciudad: </label></td>
        <td class="b">
          <p>{{ ciudad }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">Organización: </label></td>
        <td class="b">
          <p>{{ organizacion }}</p>
        </td>
      </tr>
      <tr >
        <td class="a"><label for="">Proveedor de Internet: </label></td>
        <td class="b">
          <p>{{ proveedor }}</p>
        </td>
      </tr>
      <tr >
        <td class="a" id="c"><label for="">Imagen: </label></td>
        <td class="b" id="c"><img v-bind:src="imagen" alt="" /></td>
      </tr>
    </table>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipIngresado: null,
      tipo: null,
      continente: null,
      pais: null,
      region: null,
      ciudad: null,
      organizacion: null,
      proveedor: null,
      imagen: null,
    };
  },

  methods: {
    async consultarIp() {
      const {
        type,
        continent,
        country,
        region,
        city,
        connection: { isp, org },
        flag: { img },
      } = await fetch("https://ipwho.is/" + this.ipIngresado).then((r) =>
        r.json()
      );

      this.tipo = type;
      //const{isp}=connection;
      (this.continente = continent),
        (this.pais = country),
        (this.region = region),
        (this.ciudad = city),
        (this.organizacion = org),
        (this.proveedor = isp),
        (this.imagen = img);
    },
  },
};
</script>

<style>
button {
  background-color: salmon;
  border-radius: 5px;
  border: none;
  color: white;
  margin: 0 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}
button:hover {
  background-color: #5a68a6;
  transition: 0.3s ease-in-out;
}

.table1{
  border-spacing: 5px;
  margin: auto;
  margin-top: 20px;
}

.a{
  
  margin: auto;
  text-align: right;
  margin-top: 20px;
  background-color: lightsalmon;
  text-transform: uppercase;
  color: darkred;
   font-style: oblique;
}

.b{
  padding-left: 10px;
  padding-right: 10px;
  background-color: bisque;
  text-align: center;
  color: black;
}

.div1{
  margin: auto;
  height: 80px;
  width:  300px;
padding-top: 20px;
  background-color: bisque;
}

img {
 max-width: 20%;
 max-height: 10%;
 padding-bottom: 900px;
}

#c{
  padding-top: 0px;
  padding-bottom: 90px;
}


</style>
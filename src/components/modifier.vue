<template>
<div class="modifier">
    <my-button @click.native="buttonClick" v-if="true"></my-button>
</div>
</template>

<script>
import myButton from './myButton.vue'
export default {
  name: 'modifier',
  components: {
    myButton
  },
  methods: {
    buttonClick () {
      alert('"原生点击"')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

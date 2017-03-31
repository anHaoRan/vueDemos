<template>
    <div class="once">
        <p v-html="ha"></p>
        <p>此时在界面我们就能看到显示红色的字你就解析成功了这几个字样，就是被成功解析了</p>
     </div>
</template>

<script>
export default {
  name: 'once',
  data () {
    return {
      ha: "<p style='color : red;font-weight:bold;'>显示红色的字你就解析成功了</p>"
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

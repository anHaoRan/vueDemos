<template>
    <div class="once">
        <p v-once>hello {{world}}</p>
        <button @click="world='ziksang'">改变wrold值</button>
        <p>通过指令我们可以对文本值进行一次性赋值操作，只进行第一次的数据渲染，如果再次改变值，文本值也不会改变</p>
     </div>
</template>

<script>
export default {
  name: 'once',
  data () {
    return {
      world: '这是初始值'
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

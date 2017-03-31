<template>
    <div class="hello">
        <p>hello {{world}}</p>
        <p v-text="'hello ' + world"></p>
        <p>{{`hello ${world}`}}</p>
        <p v-text="`hello ${world}`"></p>
        <button @click="world='点击改变初始值'">改变wrold值</button>
        <hr>
        <p>以上用了四种写法</p>
        <p>第一种“Mustache” 语法（双大括号）写法</p>
        <p>第二种 用v-text的指今写法</p>
        <p>第三种和第四是对es6写法的拓展写法，称模板字符串</p>
     </div>
</template>

<script>
export default {
  name: 'hello',
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

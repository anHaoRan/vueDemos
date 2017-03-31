<template>
    <div class="attribute">
        <p>介绍：在vue中属性这个东西很关健，在组件与组件中数据传递时会很有用，但是对于属性的解析我们不能用{{}}“Mustache” 语法（双大括号）写法，我们同时还是要用指令去解析，那就是v-bind:*,同时我们可以简写用v-bind语法糖 ：</p>
        <p>即可如果我们先不考虑组件传递，我们就是考虑简单的给元素加属性应用场景 在组件中传递时需要用,其它元素上的绑定属性都需要这个功能</p>
        <a :href='href'>href</a>
        <p :id='id'>id</p>
        <img :src="src" alt="图片" :title="title">
        <button :disabled = 'disabled' style="width:200px">按钮</button>
        <p>我们在属性中支持number string boolean类型，以上显示能在界面中看出都能正常进行和原本属性所预期的，不用<span style="color:red;font-weight:bold">：</span>来绑定的属性可以直接属性赋值，如果一定要通过data数据选项中返回的值一定要加<span style="color:red;font-weight:bold"> ：</span></p>
     </div>
</template>

<script>
export default {
  name: 'attribute',
  data () {
    return {
      id: 2,
      href: 'www.htread.com',
      src: 'https://cn.vuejs.org/images/logo.png',
      disabled: true,
      title: '标题'
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

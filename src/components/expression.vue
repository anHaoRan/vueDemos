<template>
    <div class="expression">
        <p>{{ count > 0 ? '+' : ''}} {{count + 1}}</p>
        <p>我们做了一个对count进行+1，对count进行三元表达式来进行判断做出不同的显示</p>
        <button @click='count ++'>增加</button>
        <button @click='count --'>减少</button>
        <input type="text" v-model='message'>
        <h1>{{ message.split('').reverse().join('') }}</h1>
        <p>在这，我进行了v-model指令和h1里message进行了双向绑定，随着message的改变h1里的值随着表达式的的改变而改变注意示项，在官方提出来的这几种是不可行的</p>
            <p>这是语句，不是表达式</p> 
            <!-- <p v-text="{+{+ var a = 1 +}+}"></p> -->
            <p>流控制也不会生效，请使用三元表达式 </p>
            <!-- <p v-text="{{ if (ok) { return message } }}"></p> -->
            <p>//坑爹模式下字符串必须用英文单引号,属性值后边不允许有空格</p>
     </div>
</template>

<script>
export default {
  name: 'expression',
  data () {
    return {
      count: 0,
      message: ''
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

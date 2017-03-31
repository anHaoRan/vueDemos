<template>
    <div class="effect">
      <p>对于我的理解我就定义他叫副本过滤，在不改动data选项原数组的同时，对新数组进行改变，同时也不创造出多余的数据值，那我们这里就要用到一个基础3所要讲的计算属性</p>
      <p>应用场景 ：</p>
      <p>我在这里做了一个小demo当原数组里面随机改变值的同时，副本基于原数组的创建出一个副本数组跟着过滤的不同而改变</p>
      <p>有两个视图：</p>
      <p>1.第一个视图，我们点击按纽改变1-10的随机数</p>
      <p>2.第二个视图，随着随机数的改变来判断是否为偶数是偶数的则过滤出来</p>
      <div>
        <ul>
           <li v-for = " (item,index) in list" v-text='`${item} - ${index} `'></li>
        </ul>
        <ul>
           <li v-for = " (item,index) in filter" v-text='`${item} - ${index} `'></li>
        </ul>
        <button @click="randomList">随机重置数组的值</button>
      </div>
      <p>随着我们点击按钮的同时，两个视图同时更新，本质上就是在data选项里过滤出一个新数组，同时这个新数组不会影响到data选项里的数组，这个就叫做副本过滤，
      通过自己的想像可以做出很多不同的demo例子
      讲到这个里所有v-for 
      列表渲染已经讲的我个人认为非常透彻了，如果你动手去把这些代码贴进vue-cli中理解一下，再动手自己敲两个demo，我想你的项目开发速度绝对能提升一倍</p>
   </div>
</template>

<script>
export default {
  name: 'effect',
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  },
  computed: {
    filter () {
      return this.list.filter((item) => {
        return item % 2
      })
    }
  },
  methods: {
    randomList () {
      this.list = this.list.map(item => {
        return item + Math.round(Math.random() * 9 + 1)
      })
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

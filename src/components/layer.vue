<template>
  <div>
    <ul>
      <li v-for="item in list">
        <h1>{{item}}</h1>
      </li>
    </ul>
    <div @touchmove.prevent class="layer">
      <p>此时我们打开chrome调试工具的时候我们会发当我们滑动layer层的，里面的滚动不会再滚动了，我们再试着把.prevent给去掉，会发现滚动再次出现，这个原理就是event.preventDefault来阻止默认事件事执行的。</p>
      <p>实现原理，我们对layer层把它的touchmove滑动事件给干掉了，就不会触发滚动区域的滑动事件，个人认为这个场景每个项目都会用的到</p>
      <div style="width: 400px;height: 400px;background:#fff; margin:0 auto;">
        <input type="text" v-model.trim="content">
        <input type="text" v-model = 'content'>
        <p>
          这个我们能发现当加入.trim的修饰符的时候给到第二个input的时候都是去掉前后空白符的，这个功能也就是去掉前后空白符，这也是很常用的场景，一些表单当用户输入的时候，有些用户会打出一个前后空白符，有一次我保用户数据给数据库，操作的时候还代码还好好的，突然一个空白字符引发的一场血案，要注意细节点
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      content: ''
    }
  }
}

</script>

<style>
body,html {width:100%;height:100%}
h1{margin-top:10rem;}
.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}
</style>

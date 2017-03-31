<template>
<div>
<h3>1.fade</h3>
<div class="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
<p>元素封装成过渡组件之后，在遇到插入或删除时，Vue 将
自动嗅探目标元素是否有 CSS 过渡或动画，并在合适时添加/删除 CSS 类名。
如果过渡组件设置了过渡的 JavaScript 钩子函数，会在相应的阶段调用钩子函数。
如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作（插入/删除）在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，与 Vue，和Vue的 nextTick 概念不同)</p>
</div>

</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>

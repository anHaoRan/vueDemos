<template>
   <div class="left">
      <ul>
          <li v-for="item in nav"><a :href="'/#' + item.href">{{item.name}}</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      nav: [
        {
          'name': 'for-循环',
          'href': '/for'
        }, {
          'name': 'text-文字嵌入',
          'href': '/text'
        }, {
          'name': 'once-一次性渲染',
          'href': '/once'
        }, {
          'name': 'html-解析html',
          'href': '/html'
        }, {
          'name': 'attribute-属性',
          'href': '/attribute'
        }, {
          'name': 'expression-表达式',
          'href': '/expression'
        }, {
          'name': 'modifier-修饰符',
          'href': '/modifier'
        }, {
          'name': 'layer-遮罩层',
          'href': '/layer'
        }, {
          'name': 'effect-effect',
          'href': '/effect'
        }, {
          'name': 'calculation-计算属性',
          'href': '/calculation'
        }, {
          'name': 'watch-watch',
          'href': '/watch'
        }, {
          'name': 'transition-CSS过渡动画',
          'href': '/transition'
        }, {
          'name': 'recursion-递归函数demo',
          'href': '/recursion'
        }
      ]
    }
  }
}
</script>
<style>
.left{
  width: 300px;
  position: fixed;
  z-index: 999;
}
.left a {
  text-decoration: none;
  color: #2970A6;
}
</style>

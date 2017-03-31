<template>
<div class="transition">
  <p>css过渡集合</p>
  <fade></fade>
<h3>过渡的-CSS-类名</h3>
<p>会有 6 个(CSS)类名在 enter/leave 的过渡中切换</p>
<p><span class="strong">v-enter:</span> 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。</p>
<p><span class="strong">v-enter-active:</span> 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。</p>
<p>This class can be used to define the duration, delay and easing curve for the entering transition.</p>
<p><span class="strong"> v-enter-to:</span> Only available in versions >=2.1.8. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.</p>
<p><span class="strong">v-leave:</span> 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。</p>
<p><span class="strong">v-leave-active:</span> 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。</p>
<p>This class can be used to define the duration, delay and easing curve for the leaving transition.</p>
<p><span class="strong">v-leave-to:</span> Only available in versions >=2.1.8. Ending state for leave. </p>
<p>Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.</p>
<hr>
<p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。使用 < transition name="my-transition"> 可以重置前缀，比如 v-enter 替换为 my-transition-enter。
v-enter-active 和 v-leave-active 可以控制 进入/离开 过渡的不同阶段，在下面章节会有个示例说明。</p>
<slideFade></slideFade>
<h4>CSS 动画</h4>
<p>用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。</p>
<bounce></bounce>
<h4>自定义过渡类名</h4>
<p>我们可以通过以下特性来自定义过渡类名：</p>
<p>enter-class</p>
<p>enter-active-class</p>
<p>enter-to-class (>= 2.1.8 only)</p>
<p>leave-class</p>
<p>leave-active-class</p>
<p>leave-to-class (>= 2.1.8 only)</p>
<p>他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用。</p>
<p>示例：</p>
<customClassName></customClassName>
<h4>同时使用-Transitions-和-Animations</h4>
<p>Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 transitionend 或 animationend ，这取决于给元素应用的 CSS 规则。</p>
<p>如果你使用其中任何一种，Vue 能自动识别类型并设置监听。</p>
<p>但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 animation 很快的被触发并完成了，而 transition 效果还没结束。</p>
<p>在这种情况中，你就需要使用 type 特性并设置 animation 或 transition 来明确声明你需要 Vue 监听的类型。</p>
</div>
</template>

<script>
import fade from './common/fade.vue'
import slideFade from './common/slide-fade.vue'
import bounce from './common/bounce.vue'
import customClassName from './common/customClassName.vue'

export default {
  name: 'transition',
  components: {
    fade,
    slideFade,
    bounce,
    customClassName
  }
}
</script>

<style scoped>
  p{
    width: 1000px;
    margin: 0 auto;
  }
  .strong{
    color:#333;
    font-weight: bold;
  }
</style>

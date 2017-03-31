<template>
<div>
<p>修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。</p>
<p>应用场景 ：</p>
<p>对于一些特殊的指令操作时需要，比方说对组件加事件，组织元素的默认行为，组织冒泡。。等等一系列，官方文档有详细解说每一个修饰赋的具体用途</p>
<p>再次提示主逻辑代码都是写在.App.vue中,所有其它的组件代码都是写在componentes里</p>
<p>首我们先对components文件夹中创建一个myButton组件</p>
<button>按钮</button>
<p>我们可以尝试一下如果我们去掉.native的话你会发现组件根本不出alert(原生点击)的弹框，这是为什么呢，正常的情况在一个单个组件内部自己使用v-on的事件，ok都不会有问题，如果在一个组件上定义一个指令事件，必须要用.native，这里大家一定要注意</p>
</div>
</template>

<script>
export default {

}
</script>

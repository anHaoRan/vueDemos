<template>
  <div class="filter">
    <p>Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind表达式。 </p>
    <p>过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示：</p>
    <p>其实本质上过滤器也就是一个或多个表达式，但是有极条件控制的表达式或者长业务逻辑的表达式写在mustache不够清楚，明了</p>
    <p>在v-bind中也就是2.10的时候才支持这个功能，这个大家要对这个版本有一定的了解，正确的使用</p>
    <p>应用场景 ：</p>
    <p>我说说我遇到过的应用场景，再把我应用的场景再加深一点逻辑</p>
    <p>1.首先我们从后台拿到10个用户的手机，但是要把前7位掩码，做成*，然判断如果手机尾数是偶数的话，我们就显示已中奖，不是的话显示谢谢参与</p>
    <hr>
    <div>
      <p v-for='tel in telephone'>{{tel | newtel}}</p>
    </div>
    <p>代码会析，在filters选项里有个newtel的函数，value则是函数中固定的一个参数，代码过滤前的值。</p>
    <p>但最后在管道符里我们不用把这个固定的参数写在调用里面，如果没有，则返回""。我们再取后四位，在前7位拼接7个*。</p>
    <p>这里我用到了es6新特性，repeat这个方法，原本我想用padStart可惜是es7的新性，babel不支持，再截取尾数，如果尾数%2是偶数则再后面加一个中奖，否则谢谢参与，最后把这个value的最终值返回出去</p>
    <hr>
    <p>7.结合过滤器参数与v-bind过滤</p>
    <p>以上过滤器原理也跟大家说了，我们进一步深化一下，如果两都结合使用</p>
    <p>应用场景</p>
    <p>当后台传给很多链接的地址的时候，每个链接要带上不同的参数，比如https//www.baidu.com?user=ziksang&age=20,针对于这种场景我给大家实战一下</p>
    <div>
      <p v-for='(url,index) in urlList'><a :href='url.url | getquery(url.name,url.age)'>{{url.url}}</a></p>
    </div>
    <hr>
    <p>在v-bind管道符中的getquery(第一个参,第二个参)</p>
    <p>第一个参就是传给fitler里getquery里的第二个参数，就是name</p>
    <p>第二个参就是传给fitler里getquery里的第三个参数，就是age</p>
    <p>因为第一个参数是默认的</p>
    <p>这里我大量用了v-for来进行循环,如果有看不懂的话，等讲到第基础二或者三的时候再回头看看这里的v-for用法你就一目了然了</p>
    <hr>
    <p>缩写</p>
    <p>v-bind可以缩写为:,例如：v-bind:href  === :href</p>
    <p>v-click可以缩写为@click,例如 v-click="fun" === @click="fun"</p>
  </div>
</template>

<script>
export default {
  name: 'filter',
  data () {
    return {
      telephone: [10000000000, 10000000001, 10000000002, 10000000003, 10000000004, 10000000005, 10000000006, 10000000007, 10000000008, 10000000009, 10000000000],
      urlList: [
          {url: 'http://www.baidu.com', name: 'ziksang', age: 20},
          {url: 'http://www.google.com', name: 'ziksang2', age: 30}
      ]
    }
  },
  filters: {
    newtel (value) {
      if (!value) return ''
      value = value.toString().substr(7, 4)
      value = '*'.repeat(7) + value
      let endMember = value.substr(-1, 1)
      if (endMember % 2) {
        value = value + '中奖'
      } else {
        value = value + '谢谢参与'
      }
      return value
    },
    getquery (value, name, age) {
      if (!value) return ''
      return `${value}?name=${name}&age=${age}`
    }
  }
}
</script>

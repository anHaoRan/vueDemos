<template>
    <div class="calculation">
      <p>在计算属性中，在我们前面基础1和基础2分享中有两个地方可以计算属性，我们认为所有属性的计算都是变向的在过滤值，通过数据的不断变化计算出不同的值和操作不同的方法</p>
      <p>1.模板内的表达式</p>
      <p>2.属性v-bind:里的可以进行表达式</p>
      <p>3.指令中我们也可以进行表达式</p>
      <p style='text-align: left;'>以上三者优势在那里，简洁，省代码量，如果只是一个小操作，比方说一些简单的数值++，字符拼接，三元表达式，那使用相当好</p>
      <p style='text-align: left;'>以上三者的劣势，一但要处理的逻辑复杂，如果用到if ()流程控制语句，变量赋值，代码量大了就很难于维护,我们可能就会想到用filter,那filter的场景适用于那里后面再说，先看一下简单的demo</p>
      <div>
        <p @click="count++">{{count+'分'}}</p>
        <input v-model='message'>
        <p>{{message.split('').reverse().join('') }}</p>
      </div>
      <p>从上面不难看出</p>
      <p>1.模板内使用字符拼接，ok代码很清楚目的的所在</p>
      <p>2.通过指令点击，也能少一个methods方法，也很简洁</p>
      <p>3.通过输入框输入文字，在p标签里面进行计算转换的时候，那我觉得语意化就不是很强烈了，那用什么办法呢，用filter</p>
      <p></p>
      <p>用filter的优势</p>
      <p>filter给我们用于计算和过滤一些模板表达式和v-bind:属性表达式一些弊端的地方进行计算，他会返回当前计算的值，可以进行传参在多地方共用这个过滤方法，劣势</p>
      <p>如果我们要计算多个数据不同变化结合而成的地方那filter就能难过到了，本质上filter我认为就是1v1,对单个数据进行过滤，可以进行传参，同方法，但不同参，非常适用</p>
      <div>
         <input v-model='message'>
         <p>{{message | reverseString}}</p>
      </div>
      <p>我们把上个例子中第二个例子反转字符串这个方法用filter来实现,很明显示代码量多了那么一点点，但是整体的语意化相当明显了，让人一看这里就要进行一些过滤计算，能过reverseString，就能知道是反转字符串</p>
      <hr>
      <h3>1. computed</h3>
      <p>以上说了这么多前面的用法，因为我们模板语法和filter过滤来对computed的应用场景做一个铺垫，划分更加明确</p>
      <p>computed可以做那些呢，适用于什么场景呢？</p>
      <p>他规避了模板语法和filter两个所有的劣势，他的优势在于通过计算所有依赖的数据进行计算，然后返回一个值，记住可以依赖方法里所有的数据，只要一个数据发生变化，则会从新计算，来更新视图的改变，verygood,好东西看看怎么玩</p>
      <p>应用场景 :</p>
      <p>这是一个简单实用的应用场景，后面再做一个好玩的应用场景</p>
      <p>我们填写备注的时候我们会有一个字数的限制和字数显示的限制，通过输入字符，我们要提醒用户还有输入多少字</p>
      <div>
        <textarea v-model="content" :maxlength="totalcount"></textarea>
        <p>你还可以输入{{reduceCount}}字</p>
      </div>
      <p>通过一直监听文字的字符的长度来出发compunted里reduceCount这个方法，来再次进行计算，返回值给视图，让视图进行变化。这也是一个很简单的demo例子，那很好，前面我说了可以监听多个数据，只要一个数据变了，整个方法就会从新计算，反馈到视图，这个方法只是一个简单的应用，请看下个demo例子，你们就能看懂一切的一切</p>
      <p>这个例子是我想了一个多小时才次决定的例子，那就最就萨德事件使中韩足球最热门的一个事件，做IT做DEMO就是要玩起来，政治我们先不讨论，我们用技术来感化一下我们的爱国情</p>
      <p>demo场景分析</p>
      <p>1.我们要声明那些数据</p>
      <p>一.比赛时间 用time来维护</p>
      <p>二.比赛双方的进球数 用对象来维护</p>
      <p>三.比赛的播报情况 在90分钟内，要显示中国领先或者韩国队领先或者双方僵持，如果到了90分种我们要显示中国队赢还是韩国队赢，还是平局</p>
      <p>第三个数据非常关键，我们用什么来维护，可以说比赛情况是多样化的，用一个数据去定死维护，不符合场景，那我先列出那通过改变这些变化，我们不但要检测双方的进球数，还要通过时间来比对，是90分钟内，还是已经结束比赛了，来显示不同的文案。所以我们要不断监听两个维护的数据，一是比赛时间，二是比赛两队进球数</p>
      <div>
        <h4>比赛时间{{time}}s</h4>
        <h5>直播播报{{result}}</h5>
        <div>
             <p>中国队进球数：{{team.china}}</p>
             <button @click="team.china++">点击中国队进一球</button>
             <p>韩国队进球数：{{team.korea}}</p>
             <button @click="team.korea++">点击韩国队进一球</button>
        </div>
      </div>
      <p>上面的我用点击事件来进行双方进球数，把上面这个demo运行一下我们可以充分的理解computed的涵意，说到底是观察一个或者多个数据，每当其中一个数据改变的时候，这个函数就会从新计算,还有就是通过观察所有数据来维护一个状态，就是所谓的返回一个状态值，从上面这个demo我们就可以很容易的知道computed到底用在什么场景，如何去维护返回一个多状态的场景</p>
      <h3>2.methods vs computed</h3>
      <p>在methods和computed可以做同样的事，但是，computed可以进行缓存，什么意思呢，就是在上个例子我们对比赛时间和两个球队的进球数进行了检测数据，如果随着时间的改变，但是球数没动，对于computed来说只会从新计算这个球数会进入缓存，不会再次计算，而从新计算的是这个时间,而且页面的dom更新也会出发methods来从新计算属性，所以如果不想让计算属性进入缓存，请求methods,但是我推荐用computed，语议化好一点麻，什么选项里就应该改做什么事，methods里面就是应该来管事件的。个人认为,同样的操作我就不演示demo了，看看官方的用法理解一下就可以了</p>
      <h3>3.computed vs watch</h3>
      <watch></watch>
   </div>
</template>

<script>
import watch from './watch.vue'
export default {
  name: 'calculation',
  components: {
    watch
  },
  created () {
    let time = setInterval(() => {
      this.time ++
      if (this.time === 90) {
        clearInterval(time)
      }
    }, 1000)
  },
  data () {
    return {
      count: 0,
      message: '',
      totalcount: 200,
      content: '',
      time: 0,
      team: {
        china: 0,
        korea: 0
      }
    }
  },
  filters: {
    reverseString (value) {
      if (!value) return ''
      value = value.split('').reverse().join('')
      return value
    }
  },
  computed: {
    filter () {
      return this.list.filter((item) => {
        return item % 2
      })
    },
    reduceCount () {
      return this.totalcount - this.content.length
    },
    result () {
      if (this.time < 90) {
        if (this.team.china > this.team.korea) {
          return '中国队领先'
        } else if (this.team.china < this.team.korea) {
          return '韩国队领先'
        } else {
          return '双方僵持'
        }
      } else {
        if (this.team.china > this.team.korea) {
          return '中国队赢'
        } else if (this.team.china < this.team.korea) {
          return '韩国队赢'
        } else {
          return '平局'
        }
      }
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

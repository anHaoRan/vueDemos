<template>
  <div class="for">
    <p>1、v-for array 数组渲染</p>
    <p>我们用v-for指令根据一组数组的选项列表进行渲染。</p>
    <p>v-for指令需要以item in items形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。</p>
    <p>应用场景：</p>
    <p>通常情况下，进入一个活动要展示出所有参加活动的人员，里面有姓名，年龄，报名时间等等，就先举这三个列子，那后台肯定会返回一个arraylist数组集合，集合中每个元素肯定是一个对象，那我们如何去把这个数组集合高效率，合理的渲染到页面上</p>
    <p>再拿到用户id去到下一个页面查询memberDetail祥情，用过jq的同学肯定知识很烦繁，一般肯定是用arttemplate这种模板引擎</p>
    <hr>
    <div>
         <ul>
             <li v-for="(item,index) in memberList" @click="memberDetail(index)">
                 <span>{{item.custName}}</span>
                 <span>{{item.age}}</span>
                 <span>{{item.joinTime}}</span>
             </li>
         </ul>
     </div>
     <hr>
     <p>我觉得这个demo太常用了，逐行分析</p>
     <p>1.如果在template模板里面用到了数据必须先在data选项里先声明赋值，我们先给memberList给予一个[]数组</p>
    <p>2.在created函数里我们就当作模拟从后台拿到的数据，然后赋值给data选项里的memberList，此时memberList就有后台拿到的值了</p>
    <p>3.(item,index) in memberList是vue自己封装的一个语法结构</p>
    <p>一.item代表集合中的每一个元素，此时每一个元素就是一个对象</p>
    <p>二.index代表集合每一个元素的下标</p>
    <p>三.memberList是所要循环的数组</p>
    <p>4.为什么我们要把 (item,index) in memberList放在每一个循环dom上，那就是li标签 </p>
    <p>只有在li循环体节点上和循环体所有子节点上拿到item这个对象里面的所有属性</p>
    <p>5.@click="memberDetail(index)" 这里用了一个点击方法，我们把index作为了方法的参数，目的是什么，这个index代表每一个循环出来dom的下标，通过点击，我们可以拿到对应的用户id可以说拿到每一个用户的任意值，然后在methods我们进行操作，我们可以能过sessonStorage来存放，用来过度到下一个用户祥情页，来获取所有用户详情，我们可以打开谷歌浏览器，当我们用鼠标点击的时候，可以发现sessionStorage里的变化</p>
    <p>整个流程是无论是开发任意中型项目必备的</p>
    <hr>
    <p>1、template v-for</p>
    <p>如同 v-if 模板，你也可以用带有 v-for 的 < template > 标签来渲染多个元素块，循环块区域</p>
    <p>应用场景 ：</p>
    <p>当我们循环渲染时，我们如果有多个欠套不合理的关系下，一般情况下肯定是在最外层套一个div元素，这个我认为显的不是很清楚，我们用template来代替渲染，不但能省去很dom节点，而且也能解决欠套不合理的情况</p>
     <template v-for="item in list">
              <p>{{item.content}}</p>
              <img :src="item.img" alt="">
              <p class="divider"></p>
    </template>
    <p>如果我们不想多创节点，又不想让p元素做为根节点，我们就可以用template来做渲染，在chorme开发者工具上，也能证实，最外层的的template会自动消失，不会创造出多余的节点。</p>
    <p>3、v-for Object 对象渲染</p>
    <p>你也可以用 v-for 通过一个对象的属性来迭代。</p>
    <p>应用场景 ：</p>
    <p>就像第一个列子如果到了详情页，我们要展示一个用户详情，如果后端都给你排好序了，如何正确的方便展示出来，用最快，最便捷的方法那就是v-for 迭代对象，一般情况下展示一个用户详情，后台肯定返回一个用户对象给你</p>
     <table>
         <template>
            <tr>
                <td v-for="(value,key,index) in memberDetail">{{key}}</td>
            </tr>
            <tr>
                <td v-for="(value,key,index) in memberDetail">{{value}}</td>
            </tr>
         </template>
     </table>
    <p>1.(value,key) in memberDetail</p>
    <p>value代表属性值</p>
    <p>key 代表属性,</p>
    <p>index代表每个dom节点的下标索引</p>
    <p>两者都是一一对应的，通过第一个例子讲解，我相信这个例子很简单了</p>
    <hr>
    <p>4. v-for 整数迭代</p>
    <p>这个看看demo就可以了，我几乎没用过</p>
    <p v-for="n in 10">{{ n }}</p>
    <hr>
    <p>4. v-for 和 组件</p>
    <p>在自定义组件里，你可以像任何普通元素一样用 v-for 。</p>
    <p>应用场景 ：</p>
    <p>比方拿掘金来说，每个用户展现的文章列表中，每个用户的文章可以做成一个统一组件，通过父组件来进行数据的传递，循环出所有人的文章，就形成了文章列表，而且可以在热门，最新，或者专栏里面复用，只需要通过数据传递，是一种相当好的模式</p>
    <p>在components文件夹里创一个myArticle文件</p>
        <template>
          <my-article v-for='item in artList' :art-list='item'></my-article>
          <button @click='push'>添加文章</button>
          <button @click='pop'>尾部去除一篇文章</button>
          <button @click='unshift'>在头部加入一条数据</button>
          <button @click='shift'>在头部去除一条数据</button>
          <button @click='reverse'>把所有数据进行反转</button>
          <button @click='clear'>清除所有数据</button>
        </template>
    <hr>
    <p>4. 数组更新检测</p>
    <p>1.数组变异</p>
    <p>说的通俗一点，实是就是我们用Array.prototype里提供的原型方法里我们能直接改掉data选项里的数据，触发了视图更新，那就是叫数组变异方法</p>
    <p>官方给大家列了只有那些方法能触发视图更新</p>
    <p>1.push()</p>
    <p>2.pop()</p>
    <p>3.shift()</p>
    <p>4.unshift()</p>
    <p>5.splice()</p>
    <p>6.sort()</p>
    <p>7.reverse()</p>
    <p>应用场景，我们比方说我们是掘金的后台控制者，我们无聊看那个文章不爽，我们对文章进行操作，这个只是我瞎说玩玩的场景，就是用情景去模拟用法的场景</p>
    <hr>
    <p>我们发现我们点这些按钮的时候，myArticle的视图同时跟着改变，这就是我们需要的效果就是变异方法根本的意思，能通过Array.prototype里的原形方法改变data选项artList数组触发视图改变的方法就是变异方法</p>
    <hr>
    <p>2.数组非变异</p>
    <p>no-mutation methods(非变异方法)，不能通过Array.prototype里的原形方法改变data选项artList数组触发视图改变的方法就是非变异方法.其余的方法都是操作后，形成一个返回值，所有操作只是返回了一个新数组，而不会触发视图更新</p>
    <p>有1.fil ter ( ),</p>
    <p> 2.co ncat ( ),</p>
    <p> 3.sl ice( ),</p>
    <p> 4.ma p( )</p>
    <div>
      <ul>
         <li v-for = " (item,index) in list1" v-text='`${item} - ${index}`'></li>
      </ul>
      <button @click="filter">数组进行取余过滤</button>
      <button @click="concat">数组进行合并</button>
      <button @click="map">数组印射</button>
      <button @click="slice">返回截取后的数组</button>
    </div>
    <hr>
    <h4>4. 注意示项</h4>
    <p>官方提示：</p>
    <p>由于 JavaScript 的限制， Vue 不能检测以下变动的数组：</p>
    <p>当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue</p>
    <p>当你修改数组的长度时，例如：vm.items.length = newLength</p>
    <p>在</p>
    <div>
      <ul>
         <li v-for = " (item,index) in list1" v-text='`${item} - ${index} `'></li>
      </ul>
      <button @click="change3">改变数组第2个值,改成0</button>
      <button @click="change4">改变数组第2个值,改成5</button>
    </div>
    <p>//通过下标来改变整个数组里的值也是行不通的</p>
    <p>//通过数组长度改变改个数组里的值是行不通的</p>
    <p>//第一我们可以通过，vue.set实列方法来改变，但我们要在开头再引一入下vue包</p>
    <p>// 1 第一个值代表需要改变的数组</p>
    <p>// 2 第二个代表改变那一项</p>
    <p>// 3 第三个代表改成什么值</p>
    <p>//样式语法 Vue.set(example1.items, indexOfItem, newValue)</p>
    <p>//通过 Array.prototype.splice 数组原型上的方法来改变整个数组的长度或者内容</p>
    <p>//这个方法大家肯定常用，我就不细说了</p>
  </div>
</template>

<script>
import myArticle from './myArticle.vue'
import Vue from 'vue'

export default {
  name: 'for',
  components: {
    myArticle
  },
  created () {
    this.memberList = [{custName: 'ziksang1', age: 20, joinTime: '2014-01-02', custId: 1}, {custName: 'ziksang2', age: 21, joinTime: '2014-01-03', custId: 2}, {custName: 'ziksang3', age: 22, joinTime: '2014-01-04', custId: 3}, {custName: 'ziksang4', age: 23, joinTime: '2014-01-05', custId: 4}
    ]
    this.memberDetail = {
      name: 'ziksang',
      age: 20,
      address: 'xxx省xxxx市',
      tel: '15921898427'
    }
    this.artList = [
      {name: 'ziksang1', startTime: '1小时前', content: 'aaaaaaaaa', good: 1},
      {name: 'ziksang2', startTime: '2小时前', content: 'bbbbbbbbb', good: 2},
      {name: 'ziksang3', startTime: '3小时前', content: 'ccccccccc', good: 3},
      {name: 'ziksang4', startTime: '4小时前', content: 'ddddddddd', good: 4}
    ]
  },
  data () {
    return {
      memberList: [],
      memberDetail: {},
      artList: [],
      list: [{content: 'ziksang', img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1301074775,1382810875&fm=80&w=179&h=119&img.JPEG'}, {content: 'ziksang2', img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1312092207,1376369244&fm=80&w=179&h=119&img.JPEG'}],
      list1: [1, 2, 3, 4],
      list2: [7, 8, 9, 0]
    }
  },
  methods: {
    memberDetail (index) {
      sessionStorage.custId = this.memberList[index].custId
    },
    push () {
      this.artList.push({
        name: 'ziksang5',
        startTime: '5小时前',
        content: 'eeeeeeeeee',
        good: 5
      })
    },
    pop () {
      this.artList.pop()
    },
    shift () {
      this.artList.shift()
    },
    unshift () {
      this.artList.unshift({
        name: 'ziksang3',
        age: 40
      })
    },
    reverse () {
      this.artList.reverse()
    },
    clear () {
      this.artList = []
    },
    filter () {
      this.list1 = this.list1.filter((item) => {
        return item % 2
      })
    },
    concat () {
      this.list1 = [...this.list1, ...this.list2]
    },
    map () {
      this.list1 = this.list1.map(item => {
        return `${item} map`
      })
    },
    slice () {
      this.list1 = this.list1.slice(2)
    },
    changeList () {
      this.list1[2] = 3
    },
    changeList2 () {
      this.length = 1
    },
    change3 () {
      Vue.set(this.list1, 1, 0)
    },
    change4 () {
      this.list1.splice(1, 1, 5)
    }
  }
}
</script>

<style scoped>
body,html{
    width:100%;
    height:100%
}
.divider{
    width:100%;
    height:1px;
    background:black;
}
p {
  width: 30%;
  text-align: left;
  margin:0 auto;
}

</style>

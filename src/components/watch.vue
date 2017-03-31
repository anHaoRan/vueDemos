 <template>
   <div>
        <h1>比赛时间{{time}}s</h1>
        <h2>直播播报{{result}}</h2>
        <div>
             <p>中国队进球数：{{team.china}}</p>
             <button @click="team.china ++ ">点击中国队进一球</button>
             <p>韩国队进球数：{{team.korea}}</p>
             <button @click="team.korea ++ ">点击韩国队进一球</button>
        </div>
   </div>
</template>
<script>
export default {
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
      time: 0,
      team: {china: 0, korea: 0},
      result: '双方僵持'
    }
  },
  watch: {
    time (value, oldval) {
      if (value < 90) {
        if (this.team.china > this.team.korea) {
          this.result = '中国队领先'
        } else if (this.team.china < this.team.korea) {
          this.result = '韩国队领先'
        } else {
          this.result = '双方僵持'
        }
      } else {
        if (this.team.china > this.team.korea) {
          this.result = '中国队赢'
        } else if (this.team.china < this.team.korea) {
          this.result = '韩国队赢'
        } else {
          this.result = '平局'
        }
      }
    },
    team (value, oldval) {
      if (this.time < 90) {
        if (value.china > value.korea) {
          this.result = '中国队领先'
        } else if (value.china < value.korea) {
          this.result = '韩国队领先'
        } else {
          this.result = '双方僵持'
        }
      } else {
        if (value.china > value.korea) {
          this.result = '中国队赢'
        } else if (value.china < value.korea) {
          this.result = '韩国队赢'
        } else {
          this.result = '平局'
        }
      }
    }
  }
}
</script>

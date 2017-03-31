<template>
    <div class="item">
        <p>{{artList.name}}</p>
        <p>{{artList.startTime}}</p>
        <p>{{artList.content}}</p>
        <p>{{artList.good}}</p>
    </div>
</template>

<script>
export default {
  props: ['artList']
}
</script>

<style scoped>
.item{
  width: 30%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}
.item>p{
  height: 23px;
  flex:1;
  float: left;
  margin:0 5px;
}
</style>

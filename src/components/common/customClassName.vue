<template>
<div class="demo">
<link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
</div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      show: true
    }
  }
}
</script>

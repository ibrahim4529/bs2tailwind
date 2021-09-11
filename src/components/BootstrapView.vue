<script setup lang="ts">
import useState from '~/store/state'
const { bsCode } = useState()
</script>

<template>
  <div class="container">
    <div class="use-bootstrap" v-html="bsCode"></div>
  </div>
</template>
<style lang="scss">
.use-bootstrap{
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
}
</style>

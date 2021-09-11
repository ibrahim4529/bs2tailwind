<script setup lang="ts">
import useState from '~/store/state'
const { tailwindCode } = useState()
</script>

<template>
  <div class="container">
    <div class="use-tailwind" v-html="tailwindCode">
    </div>
  </div>
</template>
<style lang="css">
</style>

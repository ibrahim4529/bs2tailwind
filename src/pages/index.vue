<script setup lang="ts">
import '~/styles/main.css'
import { PrismEditor } from 'vue-prism-editor' //
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
import prism from 'prismjs'
import useState from '~/store/state'
import BootstrapView from '~/components/BootstrapView.vue'
import TailwindView from '~/components/TailwindView.vue'
const { bsCode, tailwindCode } = useState()
const highlighter = (code: any) => {
  return prism.highlight(code, prism.languages.html, 'html')
}
</script>

<template>
  <div class="flex flex-row">
    <div class="w-1/2 h-100">
      <prism-editor
        v-model="tailwindCode"
        class="text-white flex-grow editor"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
    </div>
    <div class="w-1/2">
      <BootstrapView />
    </div>
    <div class="w-1/2">
      <TailwindView />
    </div>
  </div>
</template>

<style scoped>

.editor{
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  background-color: black;
  padding: 5px;
  height: 100%;
}
</style>

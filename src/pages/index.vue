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
  <h1>Boostrap Code & View</h1>
  <div class="flex flex-row mb-4">
    <div class="h-60 flex-1 mr-4 overflow-scroll">
      <prism-editor
        v-model="bsCode"
        class="text-white bg-gray-900 editor overflow-scroll"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
    </div>
    <div class="h-60 flex-1 overflow-scroll">
      <BootstrapView class="overflow-scroll" />
    </div>
  </div>
  <h1>Tailwind Code & View</h1>
  <div class="flex flex-row ">
    <div class="h-60 flex-1 overflow-scroll mr-4">
      <prism-editor
        v-model="tailwindCode"
        class="text-white bg-gray-900 editor"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
    </div>
    <div class="h-60 flex-1 overflow-scroll">
      <TailwindView class="overflow-scroll" />
    </div>
  </div>
</template>

<style>

.editor{
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
}
</style>

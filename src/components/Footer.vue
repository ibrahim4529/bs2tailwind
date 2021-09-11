<script setup lang="ts">
import { useAxios } from '@vue-composable/axios'
import { isDark, toggleDark } from '~/logic'
import useState from '~/store/state'
const { tailwindCode, bsCode } = useState()
const { loading, exec } = useAxios()

const convertCode = () => {
  exec({
    method: 'POST',
    url: 'http://localhost:8000/convert',
    data: {
      code: bsCode?.value,
    },
  }).then((response) => {
    if (response?.status === 200) {
      const data = response?.data
      tailwindCode.value = data.code
    }
    else { tailwindCode.value = 'Error Convert Data' }
  })
}
</script>

<template>
  <nav class="text-xl flex my-6 items-center">
    <button class="icon-btn mx-2 !outline-none" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
    <button class="px-10 py-3 ml-auto text-sm bg-blue-600 rounded text-white" @click="convertCode">
      {{ loading ? "Loading..." : "Convert" }}
    </button>
  </nav>
</template>

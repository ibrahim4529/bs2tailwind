import { reactive, toRefs } from 'vue'

const state = reactive({
  tailwindCode: '<button type="button" class="bg-blue-100">Primary</button>',
  bsCode: '<button type="button" class="btn btn-primary">Primary</button>',
  loading: false,
})

export default function useState() {
  const convertCode = async() => {
    state.loading = true
    state.tailwindCode = 'Hallo'
  }
  return {
    ...toRefs(state),
    convertCode,
  }
}

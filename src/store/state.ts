import { reactive, toRefs } from 'vue'

const state = reactive({
  tailwindCode: '',
  bsCode: '<button type="button" class="btn btn-primary">Primary</button>',
})
export default function useState() {
  return {
    ...toRefs(state),
  }
}

<template>
  <div class="Home">1</div>
</template>
<script lang="ts">
import { onMounted } from 'vue'

export default {
  name: 'Home',

  components: {},

  setup(): any {
    onMounted(() => {
      console.log('test')
    })
  },

  computed: {},

  watch: {},

  methods: {
    say(): void {
      console.log('1')
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
}
</style>

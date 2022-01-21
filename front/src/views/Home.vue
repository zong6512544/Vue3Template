<template>
  <div class="Home">

  </div>
</template>
<script lang="ts">

import { onBeforeMount, onMounted } from 'vue'

export default {
  name: 'Home',

  components: {
  },

  setup ( ) {

    onMounted(() => { console.log('test') })

  },

  computed: {
  },

  watch: {
  },

  methods: {
  },

}
</script>

<style lang="scss" scoped>

.Home {

}

</style>

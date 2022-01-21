<!--
 * @Author: zongbao.yao
 * @Date: 2022-01-11 10:59:30
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2022-01-21 14:34:05
 * @Description: 
-->
<template>
  <div class="Home">1</div>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import { getUserInfo } from '@/api/test'
export default {
  name: 'Home',

  components: {},

  setup(): any {
    onMounted(() => {
      getUserInfo()
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

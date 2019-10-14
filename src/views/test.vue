<template>
  <ul>
    <li v-items
        class="item"
        v-for="item in 10"
        :key="item">
      <img :src="require('@/assets/images/live.png')"
           alt="">
    </li>
  </ul>
</template>
<script>
export default {
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },

}
</script>
<style lang="scss" scoped>
.item {
  width: 4rem;
  height: 2rem;
  margin-bottom: 1rem;
  overflow: hidden;
  img {
    width: 100%;
  }
  &.focusEpg {
    border: 1px solid red;
  }
}
</style>
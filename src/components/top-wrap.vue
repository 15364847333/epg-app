<template>
  <div class="top-wrap">
    <p class="top-title">{{pageTitle}}</p>
    <div class="top-right">
      <span class="right-text">{{location}}</span>
      <span class="right-icon"><img :src="require(`@/assets/icons/wether/${wether}.png`)"
             alt=""></span>
      <span class="right-text">{{curTime}}</span>
    </div>
  </div>
</template>
<script>
import { addZero } from '@/utils'
export default {
  props: {
    pageTitle: {
      type: String,
      default: '联通行业EPG'
    }
  },
  data () {
    return {
      location: '广州',
      wether: 'sun'
    }
  },
  computed: {
    curTime () {
      let date = new Date()
      return addZero(date.getHours()) + ':' + addZero(date.getMinutes())
    }
  }
}
</script>
<style lang="scss" scoped>
.top-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eeeeee;
  .top-title {
    font-size: 0.48rem;
  }
  .top-right {
    display: flex;
    align-items: center;
    .right-text {
      font-size: 0.36rem;
    }
    .right-icon {
      width: 1rem;

      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
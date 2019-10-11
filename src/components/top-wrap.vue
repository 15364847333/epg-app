<template>
  <div class="top-wrap">
    <p class="top-title">{{pageTitle}}</p>
    <div class="top-right"
         v-if="topType=='info'">
      <span class="right-text">{{location}}</span>
      <span class="right-icon"><img :src="require(`@/assets/icons/wether/${wether}.png`)"
             alt=""></span>
      <span class="right-text">{{curTime}}</span>
    </div>
    <div class="top-right"
         v-if="topType=='back'">
      <span class="back-icon right-text"
            v-items="{default:false}"
            @click="$router.go(-1)">
        返回
      </span>
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
    },
    topType: {
      type: String,
      default: 'info'
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

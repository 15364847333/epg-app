<template>
  <div class="error-page">
    <div class="error-box"
         v-if="errorType=='net'">
      <p class="error-title">播放错误</p>
      <p class="error-desc">网络异常</p>
      <div class="error-btns-wrap">
        <button class="epg-button epgCancel netSure"
                v-items="{default:true}"
                @click="$emit('closeBox')">确定</button>
      </div>
    </div>
    <div class="error-box"
         v-if="errorType=='pay'">
      <p class="error-title">温馨提示</p>
      <p class="error-desc">本次节目需要按次点播，付费收看<br>点播后立即生效<br>
        该节目在订购有效期内（120小时）<br>可不限次数观看订阅节目内容</p>
      <div class="error-btns-wrap">
        <button class="epg-button epgCancel"
                v-items
                @click="pay">5元/次</button>
        <button class="epg-button epgCancel"
                v-items="{default:true}"
                @click="$emit('closeBox')">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    errorType: {
      type: String,
      default: 'pay'
    },
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
  methods: {
    pay () {
      //付费
    }
  }
}
</script>
<style lang="scss" scoped>
.error-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  .error-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 10.42rem;
    border-radius: 0.07rem;
    border: 0.01rem solid rgba(241, 241, 241, 1);
    margin: 2rem auto auto;
    color: $text-color;
    min-height: 5.3rem;
    padding: 0.5rem 1.8rem;
    box-sizing: border-box;
    background-image: linear-gradient(#071b3b, #000b23);
    .error-title {
      font-size: 0.36rem;
    }
    .error-desc {
      font-size: 0.43rem;
      text-align: center;
      line-height: 0.59rem;
    }
    .error-btns-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
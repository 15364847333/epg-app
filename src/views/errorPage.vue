<template>
  <div class="error-page">
    <top-wrap></top-wrap>
    <div class="error-box"
         v-if="errorType=='net'">
      <p class="error-title">播放错误</p>
      <p class="error-desc">网络异常</p>
      <div class="error-btns-wrap">
        <el-button type="epgCancel">确定</el-button>
      </div>
    </div>
    <div class="error-box"
         v-if="errorType=='pay'">
      <p class="error-title">温馨提示</p>
      <p class="error-desc">本次节目需要按次点播，付费收看<br>点播后立即生效<br>
        该节目在订购有效期内（120小时）<br>可不限次数观看订阅节目内容</p>
      <div class="error-btns-wrap">
        <el-button type="epgCancel">5元/次</el-button>
        <el-button type="epgActive">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      errorType: 'pay'
    }
  },
  created () {
    this.errorType = this.$route.query.type || 'net'
  }
}
</script>
<style lang="scss" scoped>
.error-page {
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
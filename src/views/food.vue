<template>
  <div class="food-page">
    <top-wrap></top-wrap>
    <el-tabs v-model="activeName">
      <el-tab-pane label="人气早茶"
                   name="first"></el-tab-pane>
      <el-tab-pane label="当地人最爱美食"
                   name="second"></el-tab-pane>
      <el-tab-pane label="必吃美食店"
                   name="third"></el-tab-pane>
      <el-tab-pane label="广式甜点"
                   name="fourth"></el-tab-pane>
    </el-tabs>

    <!-- <el-carousel arrow="always"
                 type="card"
                 :autoplay="false"
                 indicator-position="none"
                 class="epg-carousel">
    
      <el-carousel-item v-for="item in data"
                        :key="item.key">
        <div class="epg-carousel-item">
          <img :src="require(`@/assets/images/travel/2.png`)"
               alt=""
               class="epg-carousel-img">
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <div class="page-bottom-btns">
      <el-button type="epgCancel">看看去哪儿</el-button>
      <el-button type="epgCancel">返回主页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      data: [
        {
          key: '1',
          title: '广州塔',
          desc: '称广州新电视塔，昵称小蛮腰。',
          bgImg: ''
        },
        {
          key: '2',
          title: '广州塔',
          desc: '称广州新电视塔，昵称小蛮腰。',
          bgImg: ''
        },
        {
          key: '3',
          title: '广州塔',
          desc: '称广州新电视塔，昵称小蛮腰。',
          bgImg: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.travel-page {
}
</style>
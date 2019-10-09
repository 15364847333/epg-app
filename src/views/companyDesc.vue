<template>
  <div class="companyDesc-page">
    <top-wrap></top-wrap>
    <el-tabs v-model="activeName">
      <el-tab-pane label="公司介绍"
                   name="first">
        <div class="company-box">
          <div class="left-wrap">
            <p class="companyName">{{companyName}}</p>
            <p class="companyDesc">{{companyDesc}}</p>
          </div>
          <div class="right-wrap">
            <img :src="companyDescImg"
                 alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公司大事记"
                   name="second">
        <div class="company-box">
          <div class="whole-wrap">
            <img :src="companyNotesImg"
                 alt="">
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="荣誉资质"
                   name="third">
        <div class="company-box">

        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="page-bottom-btns">
      <el-button type="epgCancel">看看视频宣传</el-button>
      <el-button type="epgCancel">返回主页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      companyName: '亚信科技',
      companyDesc: '亚信科技控股有限公司（简称：亚信科技，股票代码：01675.HK）成立于1993年，是领先的软件产品、解决方案和服务提供商，致力于成为大型企业数字化转型的使能者。解决方案和服务提供商，致力于成为大型企业数字化转型的使能者。',
      companyDescImg: require('@/assets/images/company/companyDesc.png'),
      companyNotesImg: require('@/assets/images/company/notes.png'),

    }
  }
}
</script>
<style lang="scss" scoped>
.companyDesc-page {
  .company-box {
    background-color: rgba(0, 0, 0, 0.4);
    border: 0.07px solid rgba(252, 185, 3, 0.4);
    display: flex;
    align-items: center;
    height: 6rem;
    .left-wrap {
      background: #fcb903;
      height: 100%;
      padding: 0.34rem;
      box-sizing: border-box;
      flex: 1;
      max-width: 5rem;
      .companyName {
        color: #3b3b3b;
        font-size: 0.43rem;
        margin-bottom: 0.25rem;
      }
      .companyDesc {
        color: #3b3b3b;
        font-size: 0.34rem;
      }
    }
    .right-wrap {
      flex: 2;
      display: flex;
      justify-content: center;
      padding: 0.2rem 0.5rem;
      img {
        width: 100%;
      }
    }
    .whole-wrap {
      padding: 0 0.5rem;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="companyDesc-page">
    <top-wrap></top-wrap>
    <div class="tabs-wrap">
      <div v-for="tab in tabData"
           :key="tab.name"
           v-items="tab.epgConfig"
           @focus="activeTab=tab.name"
           class="tabs-item"
           :class="{'activeTab':activeTab==tab.name}"
           :ref="tab.name+'Tab'">{{tab.label}}</div>
    </div>
    <div class="company-box"
         v-if="activeTab=='first'">
      <div class="left-wrap">
        <p class="companyName">{{companyName}}</p>
        <p class="companyDesc">{{companyDesc}}</p>
      </div>
      <div class="right-wrap">
        <img :src="companyDescImg"
             alt="">
      </div>
    </div>
    <div class="company-box"
         v-if="activeTab=='second'">
      <div class="whole-wrap">
        <img :src="companyNotesImg"
             alt="">
      </div>
    </div>
    <div class="company-box"
         v-if="activeTab=='third'">
      <swiper :options="swiperOption"
              class="honor-wrap">
        <swiper-slide v-for="item in honorData"
                      :key="item.id">
          <div class="honorImg">
            <img :src="item.imgSrc||''"
                 alt="">
          </div>
        </swiper-slide>
        <div class="swiper-button-prev"
             slot="button-prev"></div>
        <div class="swiper-button-next"
             slot="button-next"></div>

      </swiper>
    </div>
    <div class="page-bottom-btns">
      <el-button type="epgCancel"
                 v-items
                 @click="$router.push({name:'companyVideo'})">看看视频宣传</el-button>
      <el-button type="epgCancel"
                 v-items
                 @click="$router.push({name:'index',query:{type:'company'}})">返回主页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'first',
      tabData: [
        {
          name: 'first',
          label: '公司介绍',
          epgConfig: { default: true }
        },
        {
          name: 'second',
          label: '公司大事记'
        },
        {
          name: 'third',
          label: '荣誉资质'
        }
      ],
      activeName: 'first',
      companyName: '亚信科技',
      companyDesc: '亚信科技控股有限公司（简称：亚信科技，股票代码：01675.HK）成立于1993年，是领先的软件产品、解决方案和服务提供商，致力于成为大型企业数字化转型的使能者。解决方案和服务提供商，致力于成为大型企业数字化转型的使能者。',
      companyDescImg: require('@/assets/images/company/companyDesc.png'),
      companyNotesImg: require('@/assets/images/company/notes.png'),
      swiperOption: {
        freeMode: true,
        spaceBetween: 200,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      honorData: [
        { id: 1, imgSrc: require('@/assets/images/company/honor.png') },
        { id: 2, imgSrc: require('@/assets/images/company/honor.png') },
        { id: 3, imgSrc: require('@/assets/images/company/honor.png') },
      ]
    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
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
    .honor-wrap {
      padding: 0 2rem;
      .honorImg {
        width: 100%;
        height: 4.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .honorName {
        color: rgba(250, 193, 39, 1);
        font-size: 0.26rem;
      }
      .swiper-slide {
        text-align: center;
      }
      .swiper-button-prev,
      .swiper-button-next {
        background-size: 0.85rem;
        width: 0.85rem;
        height: 0.85rem;
      }
      .swiper-button-prev {
        background-image: url("../../assets/icons/company/prevIcon.png");
        left: 0.2rem;
      }
      .swiper-button-next {
        background-image: url("../../assets/icons/company/nextIcon.png");
        right: 0.2rem;
      }
    }
  }
}
</style>
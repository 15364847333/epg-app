<template>
  <div class="companyDesc-page">
    <top-wrap></top-wrap>
    <div class="tabs-wrap">
      <div v-for="tab in tabData"
           :key="tab.name"
           v-items="tab.epgConfig"
           @focus="activeTab=tab.name"
           @down="downTab"
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
              class="honor-wrap"
              ref="mySwiper">
        <swiper-slide v-for="(item,index) in honorData"
                      :key="item.id">
          <div class="honorImg"
               v-items
               :ref="`honor${index}`"
               @left="moveLeft"
               @right="moveRight"
               @down="moveDown"
               @up="moveUp"
               @focus="activeHonor=index">
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
      <button class="epg-button epgCancel"
              v-items
              @click="$router.push({name:'companyVideo'})"
              ref="toVideo"
              @left="leftToVideo">看看视频宣传</button>
      <button class="epg-button epgCancel"
              v-items
              @click="$router.push({name:'index',query:{type:'company'}})">返回主页</button>
    </div>
    <error-box></error-box>
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
      activeHonor: 0,
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
  methods: {
    downTab () {
      if (this.activeTab == 'third') {
        this.$service.move(this.$refs[`honor${this.activeHonor}`][0])
      } else {
        this.$service.move('down')
      }
    },
    moveUp () {
      this.$service.move(this.$refs[`thirdTab`][0])
    },
    moveDown () {
      this.$service.move(this.$refs.toVideo)
    },
    moveLeft () {
      if (this.activeHonor == 0) {
        this.$service.move(this.$refs[`secondTab`][0])
      } else {
        let swiper = this.$refs.mySwiper.swiper;
        swiper.slidePrev()
        this.$service.move('left')
      }
    },
    moveRight () {
      if (this.activeHonor == this.honorData.length - 1) {
        this.$service.move(this.$refs.toVideo)
      } else {
        let swiper = this.$refs.mySwiper.swiper;
        swiper.slideNext()
        this.$service.move(this.$refs[`honor${this.activeHonor + 1}`][0])
      }
    },
    leftToVideo () {
      this.$service.move(this.$refs[`${this.activeTab}Tab`][0])
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
    .honor-wrap {
      padding: 0 2rem;
      height: 4.8rem;
      .honorImg {
        width: 100%;
        height: 4.5rem;
        img {
          width: 100%;
          height: 100%;
        }
        &.focusEpg {
          //TODO 待确定荣誉照片获取焦点样式
          transform: scale(1.02);
        }
      }
      .swiper-slide {
        width: 100% !important;
        display: flex;
        align-items: center;
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
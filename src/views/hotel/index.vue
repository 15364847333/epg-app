<template>
  <div class="hotel-page">
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
    <div class="hotel-box">
      <swiper :options="swiperOption"
              class="hotel-wrap"
              ref="mySwiper">
        <swiper-slide v-for="(item,index) in tabContentData[activeTab]"
                      :key="item.key"
                      class="hotelItem">
          <div v-items
               class="hotelItemWrap"
               @left="moveLeft"
               @right="moveRight"
               @down="moveDown"
               @up="moveUp"
               :ref="'hotelItem'+index">
            <div class="hotelImg">
              <img :src="item.bgImg"
                   alt="">
            </div>
            <div class="hotelText">
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.desc}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev"
             slot="button-prev"
             ref="swiperPrev"></div>
        <div class="swiper-button-next"
             slot="button-next"
             ref="swiperNext"></div>
      </swiper>
    </div>
    <div class="page-bottom-btns">
      <button class="epg-button epgCancel"
              v-if="pageType=='food'"
              v-items
              @click="$router.push({name:'hotel',params:{type:'travel'}})"
              ref="toFood">看看去哪玩</button>
      <button class="epg-button epgCancel"
              v-else
              v-items
              @click="$router.push({name:'hotel',params:{type:'food'}})"
              ref="toFood">看看美食</button>
      <button class="epg-button epgCancel"
              v-items
              @click="$router.push({name:'index',query:{type:'hotel'}})"
              ref="toHome">返回主页</button>
    </div>
  </div>
</template>
<script>
import { getFoodData, getTravelData } from '@/apis/index'
export default {
  data () {
    return {
      pageType: 'food',
      activeTab: 'first',
      tabData: [

      ],
      tabContentData: {},
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
  created () {
    this.getData(this.$route.params.type)
  },
  watch: {
    '$route.params.type' (newVal) {
      this.getData(newVal)
    }
  },
  methods: {
    moveLeft () {
      let swiper = this.$refs.mySwiper.swiper;
      swiper.slidePrev()
      this.$service.move(this.$refs['hotelItem' + swiper.activeIndex][0])
    },
    moveRight () {
      let swiper = this.$refs.mySwiper.swiper;
      swiper.slideNext()
      this.$service.move('right')
    },
    moveUp () {
      this.$service.move(this.$refs[this.activeTab + 'Tab'][0])
    },
    moveDown () {
      this.$service.move(this.$refs.toFood)
    },
    async getData (type) {
      let self = this;
      self.pageType = type;
      if (self.pageType == 'food') {
        const res1 = await getFoodData()
        self.tabContentData = res1
        self.tabData = [{
          name: 'first',
          label: '人气早茶',
          epgConfig: { default: true }
        },
        {
          name: 'second',
          label: '当地人最爱美食'
        },
        {
          name: 'third',
          label: '必吃美食店'
        },
        {
          name: 'fourth',
          label: '广式甜点'
        }]

      } else {
        const res2 = await getTravelData()
        self.tabContentData = res2
        self.tabData = [{
          name: 'first',
          label: '网红打卡地',
          epgConfig: { default: true }
        },
        {
          name: 'second',
          label: '人气好评'
        },
        {
          name: 'third',
          label: '儿童游乐园'
        }]
      }
      self.activeTab = 'first';
      self.$nextTick(() => {
        self.$service.move(self.$refs['firstTab'][0])
        let swiper = this.$refs.mySwiper.swiper;
        swiper.slideTo(1)
      })

    },
    downTab () {
      let self = this;
      self.$service.move(self.$refs[`hotelItem1`][0])
      let swiper = this.$refs.mySwiper.swiper;
      swiper.slideTo(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.hotel-page {
  .swiper-container {
    height: 6.2rem;
  }
  .hotel-box {
    .hotel-wrap {
      .hotelItem {
        &.swiper-slide-active {
          .hotelText {
            display: block;
          }
        }
        .hotelItemWrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 0.12rem;
          overflow: hidden;
          .hotelImg {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              border-radius: 0.12rem;
              overflow: hidden;
            }
          }
          .hotelText {
            position: absolute;
            left: 0;
            bottom: 2px;
            right: 0;

            background: rgba(59, 59, 59, 0.47);
            color: #f1f1f1;
            padding: 0.2rem 0.25rem;
            .title {
              font-size: 0.48rem;
              line-height: 0.5rem;
              margin-bottom: 0.08rem;
            }
            .desc {
              font-size: 0.3rem;
              line-height: 0.4rem;
            }
          }
          &.focusEpg {
            transform: scale(1.01);
            .hotelText {
              display: block;
            }
          }
        }
      }
    }

    .swiper-slide {
      width: 50% !important;
      height: 6rem;
      .hotelText {
        display: none;
      }
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
</style>
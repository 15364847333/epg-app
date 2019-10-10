<template>
  <div class="hotel-page">
    <top-wrap></top-wrap>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabData"
                   :key="tab.name"
                   :label="tab.label"
                   :name="tab.name">
        <div class="hotel-box">
          <swiper :options="swiperOption"
                  class="hotel-wrap">
            <swiper-slide v-for="item in tabContentData[tab.name]"
                          :key="item.key"
                          class="hotelItem">
              <div class="hotelImg">
                <img :src="item.bgImg||''"
                     alt="">
              </div>
              <div class="hotelText">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
              </div>

            </swiper-slide>
            <div class="swiper-button-prev"
                 slot="button-prev"></div>
            <div class="swiper-button-next"
                 slot="button-next"></div>
          </swiper>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div class="page-bottom-btns">
      <el-button type="epgCancel"
                 @click="$router.push({name:'travel'})">看看去哪儿</el-button>
      <el-button type="epgCancel"
                 @click="$router.push({name:'index',query:{type:'hotel'}})">返回主页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tabData: [
        {
          name: 'first',
          label: '人气早茶'
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
        }
      ],
      tabContentData: {
        'first': [
          {
            key: '1',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/1.jpg')
          },
          {
            key: '2',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/2.png')
          },
          {
            key: '3',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/3.jpg')
          },
          {
            key: '4',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/4.jpg')
          }]
        ,
        'second': [
          {
            key: '1',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/1.jpg')
          },
          {
            key: '2',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/2.png')
          },
          {
            key: '3',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/6.jpg')
          },
        ],
        'third': [
          {
            key: '1',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/1.jpg')
          },
          {
            key: '2',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/4.jpg')
          },
          {
            key: '3',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/6.jpg')
          },
          {
            key: '4',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/3.jpg')
          },
          {
            key: '5',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/5.jpg')
          },
          {
            key: '6',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/2.png')
          },
        ],
        'fourth': [
          {
            key: '1',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/1.jpg')
          },
          {
            key: '2',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/2.png')
          },
          {
            key: '3',
            title: '精致广式早茶',
            desc: '精致广式早茶精致广式早茶精致广式早茶精致广式早茶精致广式早茶',
            bgImg: require('@/assets/images/food/6.jpg')
          },
        ]
      },
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
  }
}
</script>
<style lang="scss" scoped>
.hotel-page {
  .hotel-box {
    .hotel-wrap {
      .hotelItem {
        position: relative;
        .hotelImg {
          width: 100%;
          height: 100%;
          border-radius: 0.12rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .hotelText {
          position: absolute;
          left: 0;
          bottom: 0;
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
      }
    }

    .swiper-slide {
      width: 50% !important;
      height: 6rem;
      .hotelText {
        display: none;
      }
      &.swiper-slide-active {
        .hotelText {
          display: block;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      background-size: 0.85rem;
      width: 0.85rem;
      height: 0.85rem;
    }
    .swiper-button-prev {
      background-image: url("../assets/icons/company/prevIcon.png");
      left: 0.2rem;
    }
    .swiper-button-next {
      background-image: url("../assets/icons/company/nextIcon.png");
      right: 0.2rem;
    }
  }
}
</style>
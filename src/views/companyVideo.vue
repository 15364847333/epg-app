<template>
  <div class="companyVideo-page">
    <top-wrap></top-wrap>
    <el-tabs v-model="activeName">
      <el-tab-pane label="宣传片"
                   name="first">
        <div class="swiper-wrap">
          <swiper :options="swiperOptionTop"
                  class="gallery-top"
                  ref="swiperTop">
            <swiper-slide v-for="item in videoList"
                          :key="item.key"
                          class="videoTopItem">
              <img :src="item.imgSrc"
                   alt="">
            </swiper-slide>
          </swiper>
          <swiper :options="swiperOptionThumbs"
                  class="gallery-thumbs"
                  ref="swiperThumbs">
            <swiper-slide v-for="item in videoList"
                          :key="item.id"
                          class="videoItem">
              <img :src="item.imgSrc"
                   alt="">
            </swiper-slide>
            <div class="swiper-button-next"
                 slot="button-next"></div>
            <div class="swiper-button-prev"
                 slot="button-prev"></div>

          </swiper>
        </div>

      </el-tab-pane>
      <el-tab-pane label="公司年会"
                   name="second">
        <div class="company-box">
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="page-bottom-btns">
      <el-button type="epgCancel"
                 @click="$router.push({name:'companyDesc'})">看看公司介绍</el-button>
      <el-button type="epgCancel"
                 @click="$router.push({name:'index',query:{type:'company'}})">返回主页</el-button>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      videoList: [
        {
          id: 1,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/1.png')
        },
        {
          id: 2,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/2.png')
        },
        {
          id: 3,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/3.png')
        },
        {
          id: 4,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/4.png')
        }
      ],
      swiperOptionTop: {
        spaceBetween: 50,
        // loop: true,
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 3,
        touchRatio: 0.2,
        // loop: true,
        direction: 'vertical',
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
<style lang="scss" scoped>
.companyVideo-page {
  .swiper-wrap {
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: space-around;
    .gallery-top {
      height: 6rem !important;
      width: 15rem;
      .videoTopItem {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .gallery-thumbs {
      height: 100%;
      box-sizing: border-box;
      padding: 10px 0;
      .videoItem {
        width: 1.8rem;
        height: 1.8rem !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-size: 0.36rem;
    width: 0.36rem;
    height: 0.36rem;
  }
  .swiper-button-prev {
    background-image: url("../assets/icons/company/prev.png");
    top: 0.6rem;
    left: 50%;
  }
  .swiper-button-next {
    background-image: url("../assets/icons/company/next.png");
    bottom: 0.3rem;
    left: 50%;
    top: auto;
  }
}
</style>
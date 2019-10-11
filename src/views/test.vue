<template>
  <div class="swiper-wrap">
    <!-- <swiper :options="swiperOption">
      <swiper-slide v-for="item in 10"
                    :key="item">
        <img :src="require('@/assets/images/travel/2.png')"
             alt="">
        <p>
          Slide{{i}}
        </p>
      </swiper-slide>
      <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div>
    </swiper> -->
    <!-- swiper1 -->
    <!-- <swiper :options="swiperOptionTop"
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

    </swiper> -->

    <div v-items="item.epgConfig"
         v-for="(item, key) in videoList"
         class="card"
         :tabindex="key + 1"
         :id="'card'+key"
         :key="key"
         @click="toItem">
      <img :src="item.imgSrc"
           alt="">
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
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
      swiperOptionTop: {
        spaceBetween: 10,
        // loop: true,
        loopedSlides: 6,

      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 3,
        touchRatio: 0.2,
        // loop: true,
        direction: 'vertical',
        loopedSlides: 6, //looped slides should be the same
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      videoList: [
        {
          id: 1,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/1.jpg'),
          // epgConfig: { default: true }
        },
        {
          id: 2,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/2.jpg')
        },
        {
          id: 3,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/3.jpg')
        },
        {
          id: 4,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/4.jpg')
        },
        {
          id: 5,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/5.jpg')
        },
        {
          id: 6,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/6.jpg')
        }
      ],
    }
  },

  methods: {
    toItem () {
      console.log(this.$service)
      // this.$service.move() //移动到设置的元素上

    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  }
  // mounted () {
  //   this.$nextTick(() => {
  //     const swiperTop = this.$refs.swiperTop.swiper
  //     const swiperThumbs = this.$refs.swiperThumbs.swiper
  //     swiperTop.controller.control = swiperThumbs
  //     swiperThumbs.controller.control = swiperTop
  //   })
  // }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
// .swiper-slide {
//   width: 50% !important;
//   height: 4rem;
// }
.swiper-container {
  // background-color: #000;
}

.swiper-wrap {
  display: flex;
  height: 5rem;
}

.gallery-top {
  width: 100%;
  height: 100%;
  margin-right: 2rem;
}
.gallery-thumbs {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
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
.card {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.focusEpg {
  transform: scale(1.05);
  outline: 5px solid #00bd55;
}
</style>
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
    <swiper :options="swiperOptionTop"
            class="gallery-top"
            ref="swiperTop">
      <swiper-slide v-for="item in imgsList"
                    :key="item.id">
        <img :src="item.imgSrc"
             alt="">
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs"
            class="gallery-thumbs"
            ref="swiperThumbs">
      <swiper-slide v-for="item in imgsList"
                    :key="item.id">
        <img :src="item.imgSrc"
             alt="">
      </swiper-slide>
      <div class="swiper-button-next"
           slot="button-next"></div>
      <div class="swiper-button-prev"
           slot="button-prev"></div>

    </swiper>
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
        loop: true,
        loopedSlides: 5, //looped slides should be the same

      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        direction: 'vertical',
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      imgsList: [
        { id: 1, imgSrc: require('@/assets/images/video/1.png') },
        { id: 2, imgSrc: require('@/assets/images/video/2.png') },
        { id: 3, imgSrc: require('@/assets/images/video/3.png') },
        { id: 4, imgSrc: require('@/assets/images/video/4.png') },
        { id: 5, imgSrc: require('@/assets/images/video/5.png') }
      ]
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
img {
  width: 100%;
  height: 100%;
}
// .swiper-slide {
//   width: 50% !important;
//   height: 4rem;
// }
.swiper-container {
  background-color: #000;
}

.swiper-wrap {
  display: flex;
  height: 5rem;
}

.gallery-top {
  height: 100%;
  width: 100%;
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
</style>
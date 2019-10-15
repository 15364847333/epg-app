<template>
  <div class="companyVideo-page">
    <div v-show="!fullVideoVisiable">
      <top-wrap></top-wrap>
      <div class="tabs-wrap">
        <div v-for="tab in tabData"
             :key="tab.name"
             v-items="tab.epgConfig"
             @focus="activeTab=tab.name"
             class="tabs-item"
             @down="downTab"
             :class="{'activeTab':activeTab==tab.name}"
             :ref="tab.name+'Tab'">{{tab.label}}</div>
      </div>
      <div class="swiper-wrap"
           v-if="activeTab=='first'">
        <swiper :options="swiperOptionTop"
                class="gallery-top"
                ref="swiperTop">
          <swiper-slide v-for="(item,index) in videoList"
                        :key="item.id"
                        class="videoTopItem">
            <video :src="item.videoSrc"
                   controls="controls"
                   :id="'video'+item.id"
                   :poster="item.imgSrc">
              您的浏览器不支持 video 标签。
            </video>
            <!-- <img :src="item.imgSrc"
                 alt=""> -->
            <div class="playIcon"
                 v-items
                 :ref="`playIcon${index}`"
                 @click="fullScreen('video'+item.id,item.videoSrc)"></div>
          </swiper-slide>
        </swiper>
        <swiper :options="swiperOptionThumbs"
                class="gallery-thumbs"
                ref="swiperThumbs">
          <swiper-slide v-for="(item,index) in videoList"
                        :key="item.id"
                        class="videoItem">
            <img :src="item.imgSrc"
                 v-items
                 :ref="`thumbs${index}`"
                 @down="thumbsDown"
                 @up="thumbsUp"
                 @click="fullScreen('video'+item.id,item.videoSrc)"
                 alt="">
          </swiper-slide>
          <div class="swiper-button-next"
               slot="button-next"></div>
          <div class="swiper-button-prev"
               slot="button-prev"></div>

        </swiper>
      </div>
      <div class="company-box"
           v-if="activeTab=='second'">
      </div>
      <div class="page-bottom-btns">
        <button class="epg-button epgCancel"
                v-items
                @click="$router.push({name:'companyDesc'})">看看公司介绍</button>
        <button class="epg-button epgCancel"
                v-items
                @click="$router.push({ name: 'index', query: { type: 'company' } })">返回主页</button>
      </div>
    </div>
    <div class="fullVideoWrap"
         v-show="fullVideoVisiable">
      <video :src="fullVideoSrc"
             controls="controls"
             id="fullVideo"></video>
      <div class="controlsWrap">
        <div class="backIcon"
             v-items
             @click="backPage">返回</div>
        <div class="playIcon"
             v-items
             @click="playVideo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'first',
      activeVideoIndex: 0,
      tabData: [
        {
          name: 'first',
          label: '宣传片',
          epgConfig: { default: true }
        },
        {
          name: 'second',
          label: '公司年会'
        }
      ],
      fullVideoSrc: '',
      fullVideoVisiable: false,
      videoList: [
        {
          id: 1,
          videoSrc: require('@/assets/videos/moto.mp4'),
          imgSrc: require('@/assets/images/video/1.jpg')
        },
        // {
        //   id: 2,
        //   videoSrc: require('@/assets/videos/moto.mp4'),
        //   imgSrc: require('@/assets/images/video/2.jpg')
        // },
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
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,

      },
      swiperOptionThumbs: {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
      //页面加载后，移动到默认焦点
      this.$service.move(this.$service.pointer)
    })
  },
  methods: {
    fullScreen (id, videoSrc) {
      let self = this;
      self.fullVideoVisiable = true;
      self.fullVideoSrc = videoSrc;
      let video = document.getElementById(id)
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    playVideo () {
      let video = document.getElementById('fullVideo')
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    backPage () {
      let self = this;
      self.fullVideoVisiable = false;
      let video = document.getElementById('fullVideo');
      video.pause();
    },
    downTab () {
      let self = this;
      if (self.activeTab == 'first') {
        self.$service.move(self.$refs[`thumbs0`][0])
      } else {
        self.$service.move('down')
      }
    },
    thumbsUp () {
      let self = this;
      let swiper1 = self.$refs.swiperTop.swiper;
      let swiper2 = self.$refs.swiperTop.swiper;
      let index = swiper1.realIndex == 0 ? self.videoList.length - 1 : swiper1.realIndex - 1
      self.activeVideoIndex = index;
      self.$service.move(self.$refs[`thumbs${index}`][0])
      swiper2.slideTo(index)
      // swiper2.slidePrev()
    },
    thumbsDown () {
      let self = this;
      let swiper1 = self.$refs.swiperTop.swiper;
      let swiper2 = self.$refs.swiperTop.swiper;
      let index = swiper1.realIndex == self.videoList.length - 1 ? 0 : swiper1.realIndex + 1
      self.activeVideoIndex = index;
      self.$service.move(self.$refs[`thumbs${index}`][0])
      swiper2.slideNext()
    }
  }
}
</script>
<style lang="scss" scoped>
.companyVideo-page {
  .tabs-item {
    min-width: 1.7rem;
    margin-right: 0 !important;
    text-align: center;
  }
  .swiper-wrap {
    display: flex;
    height: 6.08rem;
    align-items: center;
    .gallery-top {
      width: 78%;
      max-width: 15rem;
      height: 100%;
    }
    .gallery-thumbs {
      width: 1.8rem;
      height: 100%;
      box-sizing: border-box;
      .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      .swiper-slide-active {
        opacity: 1;
      }
    }

    .swiper-wrapper {
      width: 100%;
      img,
      video {
        width: 100%;
        height: 100%;
        border-radius: 0.08rem;
      }
      .videoTopItem,
      .videoItem {
        width: 100%;
      }
      .playIcon {
        position: absolute;
        width: 1.26rem;
        height: 1.26rem;
        background: url("../../assets/icons/company/play.png") no-repeat center;
        background-size: cover;
        left: 50%;
        top: 50%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      background-size: 0.36rem;
      width: 0.36rem;
      height: 0.36rem;
      outline: none;
    }
    .swiper-button-prev {
      background-image: url("../../assets/icons/company/prev.png");
      top: 0.6rem;
      left: 50%;
    }
    .swiper-button-next {
      background-image: url("../../assets/icons/company/next.png");
      bottom: 0.3rem;
      left: 50%;
      top: auto;
    }
  }
  .fullVideoWrap {
    width: 100%;
    height: 100%;
    position: relative;
    video {
      width: 100%;
      height: 100%;
    }
    .controlsWrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .playIcon {
        position: absolute;
        width: 1.26rem;
        height: 1.26rem;
        background: url("../../assets/icons/company/play.png") no-repeat center;
        background-size: cover;
        left: 50%;
        top: 50%;
      }
      .backIcon {
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        padding-left: 1rem;
        background: url("../../assets/icons/back.png") no-repeat center;
        background-size: 0.3rem;
        font-size: 0.32rem;
        color: #eee;
        cursor: pointer;
      }
    }
  }
}
</style>
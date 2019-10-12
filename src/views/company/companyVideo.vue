<template>
  <div class="companyVideo-page">
    <div v-show="!fullVideoVisiable">
      <top-wrap></top-wrap>
      <el-tabs v-model="activeName">
        <el-tab-pane label="宣传片"
                     name="first">
          <div class="swiper-wrap">
            <swiper :options="swiperOptionTop"
                    class="gallery-left"
                    ref="swiperLeft">
              <swiper-slide v-for="item in videoList"
                            :key="item.id"
                            class="videoTopItem">
                <video :src="item.videoSrc"
                       controls="controls"
                       :id="'video'+item.id">
                  您的浏览器不支持 video 标签。
                </video>
                <div class="playIcon"
                     @click="FullScreen('video'+item.id,item.videoSrc)"></div>
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
                   v-items
                   @click="$router.push({name:'companyDesc'})">看看公司介绍</el-button>
        <el-button type="epgCancel"
                   v-items
                   @click="$router.push({name:'index',query:{type:'company'}})">返回主页</el-button>
      </div>
    </div>
    <div class="fullVideoWrap"
         v-show="fullVideoVisiable">
      <video :src="fullVideoSrc"
             controls="controls"
             id="fullVideo"></video>
      <div class="controlsWrap">
        <div class="backIcon"
             @click="backPage">返回</div>
        <div class="playIcon"
             @click="playVideo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
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
        spaceBetween: 100,
      },
      swiperOptionThumbs: {
        spaceBetween: 20,
        slidesPerView: 3,
        direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperLeft = this.$refs.swiperLeft.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperLeft.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperLeft
    })
  },
  methods: {
    FullScreen (id, videoSrc) {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.companyVideo-page {
  .swiper-wrap {
    display: flex;
    height: 6.08rem;
    align-items: center;
    justify-content: space-around;
    .gallery-left {
      width: 15rem;
      height: 100%;
      .videoTopItem {
        width: 100% !important;
        border-radius: 0.08rem;
        overflow: hidden;
        position: relative;
        img,
        video {
          width: 100%;
          height: 100%;
          outline: none;
        }
        .playIcon {
          position: absolute;
          width: 1.26rem;
          height: 1.26rem;
          background: url("../../assets/icons/company/play.png") no-repeat
            center;
          background-size: cover;
          left: 50%;
          top: 50%;
        }
      }
    }
    .gallery-thumbs {
      height: 100%;
      box-sizing: border-box;
      border-radius: 0.08rem;
      overflow: hidden;
      .videoItem {
        width: 1.8rem;
        height: 1.8rem !important;
        border-radius: 0.08rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
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
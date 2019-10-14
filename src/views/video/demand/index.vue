import { addZero } from '@/utils';
<template>
  <div class="demand-page">
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
    <div class="demand-box">
      <ul class="demand-list top">
        <li v-for="item in tabContentData[activeTab].top"
            :key="item.id"
            v-items
            @click="$router.push({name:item.type})"
            class="demand-item">
          <div class="demand-img">
            <img :src="item.imgSrc"
                 alt="">
          </div>
        </li>
      </ul>
      <ul class="demand-list more">
        <li v-for="item in tabContentData[activeTab].more"
            :key="item.id"
            v-items
            @click="$router.push({name:item.type})"
            class="demand-item">
          <div class="demand-img">
            <img :src="item.imgSrc"
                 alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="page-bottom-btns">
      <p>往下更多精彩</p>
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
          label: '精选',
          epgConfig: { default: true }
        },
        {
          name: 'second',
          label: '影视'
        },
        {
          name: 'third',
          label: '娱乐'
        },
        {
          name: 'fourth',
          label: '专区'
        }
      ],
      tabContentData: {
        first: {
          top: [
            {
              id: 1,
              imgSrc: require('@/assets/images/demand/top1.png'),
              type: 'drama'
            },
            {
              id: 2,
              imgSrc: require('@/assets/images/demand/top2.png'),
              type: 'film'
            },],
          more: [
            {
              id: 1,
              imgSrc: require('@/assets/images/demand/3.png'),
              type: 'drama'
            },
            {
              id: 2,
              imgSrc: require('@/assets/images/demand/4.png'),
              type: 'drama'
            },
            {
              id: 3,
              imgSrc: require('@/assets/images/demand/5.png'),
              type: 'drama'
            },
            {
              id: 4,
              imgSrc: require('@/assets/images/demand/6.png'),
              type: 'drama'
            },
          ]
        },
        second: {
          top: [
            {
              id: 2,
              imgSrc: require('@/assets/images/demand/top2.png'),
              type: 'drama'
            },
            {
              id: 1,
              imgSrc: require('@/assets/images/demand/top1.png'),
              type: 'drama'
            },],
          more: [
            {
              id: 3,
              imgSrc: require('@/assets/images/demand/3.png'),
              type: 'drama'
            },
            {
              id: 4,
              imgSrc: require('@/assets/images/demand/4.png'),
              type: 'drama'
            },
            {
              id: 5,
              imgSrc: require('@/assets/images/demand/5.png'),
              type: 'drama'
            },
            {
              id: 6,
              imgSrc: require('@/assets/images/demand/6.png'),
              type: 'drama'
            }]
        },
        third: {
          top: [
            {
              id: 1,
              imgSrc: require('@/assets/images/demand/top1.png'),
              type: 'drama'
            },
            {
              id: 2,
              imgSrc: require('@/assets/images/demand/top2.png'),
              type: 'drama'
            },],
          more: [
            {
              id: 3,
              imgSrc: require('@/assets/images/demand/3.png'),
              type: 'drama'
            },
            {
              id: 4,
              imgSrc: require('@/assets/images/demand/4.png'),
              type: 'drama'
            },
            {
              id: 5,
              imgSrc: require('@/assets/images/demand/5.png'),
              type: 'drama'
            },
            {
              id: 6,
              imgSrc: require('@/assets/images/demand/6.png'),
              type: 'drama'
            }]
        },
        fourth: {
          top: [

            {
              id: 2,
              imgSrc: require('@/assets/images/demand/top2.png'),
              type: 'drama'
            },
            {
              id: 1,
              imgSrc: require('@/assets/images/demand/top1.png'),
              type: 'drama'
            },],
          more: [
            {
              id: 3,
              imgSrc: require('@/assets/images/demand/3.png'),
              type: 'drama'
            },
            {
              id: 4,
              imgSrc: require('@/assets/images/demand/4.png'),
              type: 'drama'
            },
            {
              id: 5,
              imgSrc: require('@/assets/images/demand/5.png'),
              type: 'drama'
            },
            {
              id: 6,
              imgSrc: require('@/assets/images/demand/6.png'),
              type: 'drama'
            }]
        }
      },

    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
  created () {

  },
  methods: {
    moveLeft () {
      let swiper = this.$refs.mySwiper.swiper;
      swiper.slidePrev()
      this.$service.move(this.$refs['demandItem' + swiper.activeIndex][0])
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

  }
}
</script>
<style lang="scss" scoped>
.demand-page {
  .tabs-item {
    min-width: 2rem;
    text-align: center;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .demand-box {
    height: 8rem;
    overflow: auto;
    .demand-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .demand-item {
        margin-bottom: 0.1rem;
        .demand-img {
          max-width: 8.5rem;
          min-width: 3rem;
          height: 4rem;
          border-radius: 0.08rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &.focusEpg {
          transform: scale(1.03);
          .demand-img {
            border: 1px solid rgba(255, 170, 0, 0.3);
          }
        }
      }
      &.more {
        .demand-img {
          max-width: 5.5rem;
          min-width: 2.8rem;
          height: 3rem;
        }
      }
    }
  }
  .page-bottom-btns {
    font-size: 0.3rem;
    color: $text-color;
  }
}
</style>
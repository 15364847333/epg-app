<template>
  <div class="home-page">
    <top-wrap></top-wrap>
    <ul class="home-list">
      <li v-for="item in pageConfig"
          :key="item.key">
        <div class="home-item"
             @click="$router.push('/'+(item.toPage||item.key))"
             v-items="item.epgConfig">
          <img :src="require(`@/assets/images/home/${item.key}.png`)"
               :alt="item.title"
               class="item-bg">
          <div class="item-desc">
            <img :src="require(`@/assets/icons/home/${item.key}.png`)"
                 :alt="item.title"
                 class="desc-icon">
            <span class="desc-text">{{item.title}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      homeType: 'hotel',
      normalConfig: [{
        key: 'live',
        title: '直播',
        epgConfig: { default: true }
      }, {
        key: 'demand',
        title: '点播'
      },]
    }
  },
  created () {
    this.homeType = this.$route.query.type || 'hotel'
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
  computed: {
    pageConfig () {
      let typeArr = {
        'hotel': [{
          key: 'travel',
          title: '去哪玩',
          toPage: 'hotel/travel'
        }, {
          key: 'food',
          title: '美食',
          toPage: 'hotel/food'
        }],
        'company': [{
          key: 'companyDesc',
          title: '企业介绍'
        }, {
          key: 'companyVideo',
          title: '视频宣传'
        }]
      }
      return [...this.normalConfig, ...typeArr[this.homeType]]
    }
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  .home-list {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    height: 6.9rem;
    .home-item {
      position: relative;
      display: flex;
      width: 4rem;
      border-radius: 0.14rem;
      overflow: hidden;
      .item-bg {
        width: 100%;
        height: 100%;
      }
      .item-desc {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.7rem;
        background: rgba(50, 50, 50, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        .desc-icon {
          max-width: 0.6rem;
          max-height: 0.4rem;
          margin-right: 0.1rem;
        }
        .desc-text {
          color: $text-color;
          font-size: 0.39rem;
        }
      }
      &.focusEpg {
        border: 0.02rem solid rgba(255, 170, 0, 0.3);
        box-shadow: 0 0 10px #fcb903;
        transform: scale(1.05);
      }
    }
  }
}
</style>
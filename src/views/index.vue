<template>
  <div class="home-page">
    <top-wrap></top-wrap>
    <el-row type="flex"
            justify="space-between"
            class="home-list">
      <el-col :span="6"
              v-for="item in pageConfig"
              :key="item.key">
        <div class="home-item"
             :class="item.key=='live'?'active':''"
             @click="$router.push({name:item.key})">
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      homeType: 'hotel',
      normalConfig: [{
        key: 'live',
        title: '直播'
      }, {
        key: 'demand',
        title: '点播'
      },]
    }
  },
  created () {
    this.homeType = this.$route.query.type || 'hotel'
  },
  computed: {
    pageConfig () {
      let typeArr = {
        'hotel': [{
          key: 'travel',
          title: '去哪玩'
        }, {
          key: 'food',
          title: '美食'
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
    margin-top: 1rem;
    .home-item {
      position: relative;
      display: flex;
      .item-bg {
        width: 4rem;
        border-radius: 0.14rem;
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
      &.active {
        .item-bg {
          border: 1px solid rgba(255, 170, 0, 0.3);
          transform: scale(1.05);
          // border-radius: 0.14rem;
        }
      }
    }
  }
}
</style>
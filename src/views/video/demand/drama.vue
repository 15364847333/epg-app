<template>
  <div class="drama-page">
    <div class="top-wrap">
      <p class="top-title">付费点播</p>
      <div class="top-right">
        <span class="back-icon right-text"
              v-items
              @down="$service.move($refs.playItem)"
              @click="$router.go(-1)">
          返回
        </span>
      </div>
    </div>
    <div class="drama-part">
      <div class="drama-main">
        <div class="drama-cover">
          <img :src="dramaData.coverImg"
               alt="">
        </div>
        <div class="drama-info">
          <p class="info-line">
            <span class="drama-title">{{dramaData.title}}</span>
            <span class="drama-tag-text">更新至{{dramaData.updateNum}}集</span>
          </p>
          <p class="info-line">
            <span class="drama-rate">评分：{{dramaData.rate.toFixed(1)}}</span>
            <span class="drama-tag-text">{{dramaData.year}}</span>
            <span class="drama-tag-text">{{dramaData.tags}}</span>
            <span class="drama-tag-text">{{dramaData.time}}分钟</span>
            <span class="drama-tag-text">{{dramaData.area}}</span>
          </p>
          <p class="info-line">
            <span class="drama-info-text">导演：{{dramaData.director}}</span>
          </p>
          <p class="info-line">
            <span class="drama-info-text">主演：{{dramaData.actors.join(' ')}}</span>
          </p>
          <p class="info-line">
            <span class="drama-info-text drama-desc">剧情简介：{{dramaData.desc}}</span>
          </p>
          <div class="info-btns">
            <div class="drama-info-btn play-btn"
                 v-items="{default:true}"
                 ref="playItem"
                 @click="playDrama">
              <span class="play-icon"></span>
              <p class="btn-text">播放</p>
            </div>
            <div class="drama-info-btn save-btn"
                 v-items>
              <span class="save-icon"></span>
              <p class="btn-text">收藏</p>
            </div>
          </div>
        </div>
      </div>
      <div class="drama-part-wrap">
        <p class="part-title">选集/{{dramaData.playInfo}}</p>
        <ul class="part-list">
          <li v-for="(key,index) in parts[activeRangeIndex]"
              :key="key"
              class="part-item"
              v-items
              @focus="activePart=index"
              @down="partDown"
              @up="$service.move($refs.playItem)"
              :ref="`part${key}`">
            {{key}}
          </li>
        </ul>
        <ul class="partRange-list">
          <li v-for="(item,index) in parts"
              :key="index"
              @focus="activeRangeIndex=index"
              @click="activeRangeIndex=index"
              :class="'partRange-item '+(activeRangeIndex==index?'active':'')"
              v-items
              :ref="`partRange${index}`">
            {{formatPartRange(item)}}
          </li>
        </ul>
      </div>
      <div class="recommend-wrap">
        <p class="part-title">大家都在看</p>
        <ul class="recommend-list">
          <li :span="4"
              v-for="item in recommendList"
              :key="item.id"
              class="recommend-li">
            <a class="recommend-item"
               v-items>
              <img :src="item.coverImg"
                   alt="">
            </a></li>
        </ul>
      </div>
    </div>
    <error-box :errorType="errorType"
               v-if="errorVisiable"
               @closeBox="closeErrorBox"></error-box>
  </div>
</template>
<script>
import { cutArray } from '@/utils'
export default {
  data () {
    return {
      activeRangeIndex: 0,
      activePart: 0,
      errorVisiable: false,
      errorType: 'pay',
      dramaData: {
        id: 1,
        title: '青云志',
        coverImg: require('@/assets/images/video/drama.png'),
        updateNum: 20,
        rate: 9.0,
        year: 2019,
        tags: '动作/科幻/奇幻/冒险',
        time: 180,
        area: '美国',
        director: '安东尼.罗素',
        actors: ['小罗伯特.唐尼', '斯嘉丽.约翰逊'],
        desc: '一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长的帮助下找到灭霸的隐身之处，却得知六科无限宝石均被销毁，希望彻底破灭一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长的帮助下找到灭霸的隐身之处，却得知六科无限宝石均被销毁，希望彻底破灭',
        partNum: 40,
        playInfo: '周一至周五每晚19:00更新2集'
      },
      recommendList: [
        {
          id: 1,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 2,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 3,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 4,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 5,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 6,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 7,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
        {
          id: 8,
          coverImg: require('@/assets/images/demand/drama/1.png'),
          linkUrl: ''
        },
      ]
    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },
  computed: {
    parts: function () {
      return cutArray(this.dramaData.partNum, 13)
    }
  },
  methods: {
    formatPartRange (item = []) {
      return item.length == 1 ? item[0] : [item[0], item[item.length - 1]].join('-')
    },
    partRight () {
      let index = this.activePart + 2
      if (index > this.dramaData.partNum) {
        if (index % 12 == 0) {
          this.activeRangeIndex++
          this.$service.move(this.$refs[`part${index}`][0])
        } else {
          this.$service.move('right')
        }
      } else {
        this.$service.move('down')
      }
    },
    partDown () {
      this.$service.move(this.$refs[`partRange${this.activeRangeIndex}`][0])
    },
    playDrama () {
      let self = this;
      self.errorType = 'net'//网络net;支付pay
      self.errorVisiable = true
    },
    closeErrorBox () {
      let self = this;
      self.errorVisiable = false;
      self.$service.move(this.$refs.playItem)
    }
  }
}
</script>
<style lang="scss" scoped>
.drama-page {
  height: 100%;
  overflow: auto;
  .part-title {
    font-size: 0.38rem;
    margin: 0.35rem 0 0.18rem 0;
  }
  .drama-part {
    .drama-main {
      display: flex;
      .drama-cover {
        width: 3.7rem;
        height: 4.88rem;
        overflow: hidden;
        border-radius: 0.06rem;
        img {
          height: 100%;
        }
      }
      .drama-info {
        font-size: 0.32rem;
        color: $text-color;
        margin-left: 0.4rem;

        .info-line {
          display: flex;
          align-items: center;
          margin-bottom: 0.15rem;
          line-height: 0.42rem;
          .drama-title {
            font-size: 0.42rem;
          }
          .drama-rate {
            color: #fcb903;
          }
          .drama-tag-text {
            display: inline-block;
            margin-left: 0.2rem;
            &::before {
              content: "·";
              display: inline-block;
              margin-right: 0.1rem;
            }
          }
          .drama-info-text {
            font-size: 0.3rem;
            &.drama-desc {
              max-width: 10.93rem;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
      .info-btns {
        display: flex;
        margin-top: 0.36rem;
        .drama-info-btn {
          width: 1.16rem;
          height: 1.16rem;
          background-color: #f1f1f1;
          border-radius: 0.06rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &.save-btn {
            margin-left: 0.4rem;
          }
          &.focusEpg {
            transform: scale(1.17);
            background-color: #fcb903;
            .play-icon {
              background-image: url("../../../assets/icons/demand/play-focus.png");
              background-size: contain;
            }
          }
          .play-icon,
          .save-icon {
            display: inline-block;
            width: 0.58rem;
            height: 0.58rem;
            background-size: contain;
          }
          .play-icon {
            background: url("../../../assets/icons/demand/play.png") no-repeat
              center;
            background-size: contain;
          }
          .save-icon {
            background: url("../../../assets/icons/demand/save.png") no-repeat
              center;
            background-size: contain;
          }
          .btn-text {
            font-size: 0.3rem;
            line-height: 0.42rem;
            color: #3b3b3b;
          }
        }
      }
    }
    .drama-part-wrap {
      font-size: 0.38rem;
      line-height: 0.52rem;
      .part-list {
        display: flex;
        align-items: center;
        margin-top: 0.18rem;
        margin-bottom: 0.28rem;
        .part-item {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(216, 216, 216, 0.5);
          font-size: 0.38rem;
          width: 1.05rem;
          height: 1.05rem;
          margin-right: 0.28rem;
          border-radius: 0.06rem;
          &.focusEpg {
            opacity: 0.5;
          }
        }
      }
      .partRange-list {
        display: flex;
        align-items: center;
        .partRange-item {
          color: $text-color;
          font-size: 0.3rem;
          margin-right: 0.3rem;
          &.active,
          &.focusEpg {
            color: #fcb903;
          }
        }
      }
    }
    .recommend-wrap {
      .recommend-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .recommend-li {
          width: 16.6%;
          margin-bottom: 0.2rem;
          .recommend-item {
            width: 2.6rem;
            height: 3rem;
            border-radius: 0.06rem;
            overflow: hidden;
            display: block;
            img {
              width: 100%;
              height: 100%;
            }
            &.focusEpg {
              border: 1px solid rgba(255, 170, 0, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="film-page">
    <div class="top-wrap">
      <p class="top-title">付费点播</p>
      <div class="top-right">
        <span class="back-icon right-text"
              v-items
              @click="$router.push({name:'index',query:{type:'hotel'}})">
          返回
        </span>
      </div>
    </div>
    <div class="film-part">
      <div class="film-main">
        <div class="film-cover">
          <img :src="filmData.coverImg"
               alt="">
        </div>
        <div class="film-info">
          <p class="info-line">
            <span class="film-title">{{filmData.title}}</span>
            <span class="film-tag-text">更新至{{filmData.updateNum}}集</span>
          </p>
          <p class="info-line">
            <span class="film-rate">评分：{{filmData.rate.toFixed(1)}}</span>
            <span class="film-tag-text">{{filmData.year}}</span>
            <span class="film-tag-text">{{filmData.tags}}</span>
            <span class="film-tag-text">{{filmData.time}}分钟</span>
            <span class="film-tag-text">{{filmData.area}}</span>
          </p>
          <p class="info-line">
            <span class="film-info-text">导演：{{filmData.director}}</span>
          </p>
          <p class="info-line">
            <span class="film-info-text">主演：{{filmData.actors.join(' ')}}</span>
          </p>
          <p class="info-line">
            <span class="film-info-text film-desc">剧情简介：{{filmData.desc}}</span>
          </p>
          <div class="info-btns">
            <div class="film-info-btn play-btn"
                 v-items="{default:true}">
              <span class="play-icon"></span>
              <p class="btn-text">播放</p>
            </div>
            <div class="film-info-btn save-btn"
                 v-items>
              <span class="save-icon"></span>
              <p class="btn-text">收藏</p>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend-wrap">
        <p class="part-title">大家都在看</p>
        <el-row class="recommend-list">
          <el-col :span="4"
                  v-for="item in recommendList"
                  :key="item.id"
                  class="recommend-li">
            <a class="recommend-item"
               v-items>
              <img :src="item.coverImg"
                   alt="">
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      filmData: {
        id: 1,
        title: '复仇者联盟4：终局之战',
        coverImg: require('@/assets/images/video/film.png'),
        updateNum: 20,
        rate: 9.0,
        year: 2019,
        tags: '动作/科幻/奇幻/冒险',
        time: 180,
        area: '美国',
        director: '安东尼.罗素',
        actors: ['小罗伯特.唐尼', '斯嘉丽.约翰逊'],
        desc: '一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长的帮助下找到灭霸的隐身之处，却得知六科无限宝石均被销毁，希望彻底破灭一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长的帮助下找到灭霸的隐身之处，却得知六科无限宝石均被销毁，希望彻底破灭',

      },
      recommendList: [
        {
          id: 1,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 2,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 3,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 4,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 5,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 6,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 7,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
        {
          id: 8,
          coverImg: require('@/assets/images/demand/film/1.png'),
          linkUrl: ''
        },
      ]
    }
  },
  mounted () {
    //页面加载后，移动到默认焦点
    this.$service.move(this.$service.pointer)
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
.film-page {
  .part-title {
    font-size: 0.38rem;
    margin: 0.35rem 0 0.18rem 0;
  }
  .film-part {
    .film-main {
      display: flex;
      .film-cover {
        width: 3.7rem;
        height: 4.88rem;
        overflow: hidden;
        border-radius: 0.06rem;
        img {
          height: 100%;
        }
      }
      .film-info {
        font-size: 0.32rem;
        color: $text-color;
        margin-left: 0.4rem;

        .info-line {
          display: flex;
          align-items: center;
          margin-bottom: 0.15rem;
          line-height: 0.42rem;
          .film-title {
            font-size: 0.42rem;
          }
          .film-rate {
            color: #fcb903;
          }
          .film-tag-text {
            display: inline-block;
            margin-left: 0.2rem;
            &::before {
              content: "·";
              display: inline-block;
              margin-right: 0.1rem;
            }
          }
          .film-info-text {
            font-size: 0.3rem;
            &.film-desc {
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
        .film-info-btn {
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

    .recommend-wrap {
      .recommend-list {
        .recommend-li {
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
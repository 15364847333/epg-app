<template>
  <div class="live-page">
    <div class="top-wrap">
      <p class="top-title">直播</p>
      <div class="top-right">
        <span class="back-icon right-text"
              v-items
              @click="$router.go(-1)">
          返回
        </span>
      </div>
    </div>
    <div class="live-wrap">
      <div class="channel-wrap">
        <el-row class="channel-list">
          <el-col v-for="(item,index) in channelData"
                  :key="item.id"
                  :span="12"
                  class="channel-item">
            <div class="channel-detail"
                 v-items="item.epgConfig"
                 @click="curChannel=item"
                 @focus="activeIndex=index"
                 :ref="'channel'+index">
              <img :src="item.icon||require('@/assets/icons/channel.png')"
                   alt="">
              <span>{{item.name}}</span>
            </div>
          </el-col>
        </el-row>
        <div class="btns-wrap">
          <el-button type="epgCancel"
                     v-items
                     ref="prePage">上一页</el-button>
          <el-button type="epgCancel"
                     v-items
                     ref="nextPage">下一页</el-button>
        </div>
      </div>
      <div class="channel-view">
        <div class="preview-wrap"
             v-items
             @right="movePreview">
          <img :src="curChannel.curView&&curChannel.curView.previewImg"
               alt="">
        </div>
        <div class="timeList-wrap">
          <ul class="time-list">
            <li v-for="item in curChannel.timeList"
                :key="item.id"
                class="time-item">
              <span>{{item.id==curChannel.curView.id?'正在播放':item.timeRange}}:{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getLiveData } from '@/apis/index'
export default {
  data () {
    return {
      activeIndex: 0,
      channelData: [],
      curChannel: {}
    }
  },
  created () {
    this.getLiveData();

  },

  computed: {
  },
  methods: {
    async getLiveData () {
      const res = await getLiveData()
      this.channelData = res
      this.channelData[0].epgConfig = { default: true }
      this.curChannel = this.channelData[0]
      this.$nextTick(() => {
        //页面加载后，移动到默认焦点
        this.$service.move(this.$service.pointer)
      })
    },
    movePreview () {
      if (this.activeIndex < 13) {
        this.$service.move(this.$refs['channel' + (this.activeIndex + 1)][0])
      } else {
        this.$service.move(this.$refs.prevPage)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.live-page {
  .live-wrap {
    display: flex;
    margin-top: 0.35rem;
    .channel-wrap {
      .channel-list {
        .channel-item {
          margin-bottom: 0.15rem;
          .channel-detail {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: #3b4866;
            height: 0.95rem;
            width: 3.38rem;
            font-size: 0.38rem;
            color: $text-color;
            padding: 0 0.2rem;
            box-sizing: border-box;
            img {
              width: 0.75rem;
              height: 0.21rem;
            }
            &.focusEpg,
            &.active {
              transform: scale(1.05);
              box-shadow: 0px 0.12rem 0.07rem 0px rgba(16, 25, 45, 0.5);
              border: 0.04rem solid rgba(238, 238, 238, 1);
            }
          }
        }
      }
      .btns-wrap {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .channel-view {
      .preview-wrap {
        margin-bottom: 0.8rem;
        img {
          width: 8.4rem;
        }
        &.focusEpg {
          img {
            transform: scale(1.05);
            box-shadow: 0px 0.12rem 0.07rem 0px rgba(16, 25, 45, 0.5);
            border: 0.04rem solid rgba(238, 238, 238, 1);
          }
        }
      }
      .timeList-wrap {
        .time-list {
          .time-item {
            font-size: 0.32rem;
            color: $text-color;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="live-page">
    <div class="top-wrap">
      <p class="top-title">直播</p>
      <div class="top-right">
        <span class="back-icon right-text"
              v-items
              @click="$router.go(-1)"
              ref="backPage">
          返回
        </span>
      </div>
    </div>
    <div class="live-wrap">
      <div class="channel-wrap">
        <ul class="channel-list">
          <li v-for="(item,index) in channelData"
              :key="item.id"
              :span="12"
              class="channel-item">
            <div class="channel-detail"
                 v-items="item.epgConfig"
                 @click="curChannel=item"
                 @focus="activeIndex=index"
                 @left="leftChannel"
                 @right="rightChannel"
                 :ref="'channel'+index">
              <img :src="item.icon||require('@/assets/icons/channel.png')"
                   alt="">
              <span>{{item.name}}</span>
            </div>
          </li>
        </ul>
        <div class="btns-wrap">
          <button class="epg-button epgCancel"
                  v-items
                  ref="prevPage">上一页</button>
          <button class="epg-button epgCancel"
                  v-items
                  ref="nextPage">下一页</button>
        </div>
      </div>
      <div class="channel-view">
        <div class="preview-wrap"
             v-items
             @right="movePreview"
             ref="preview">
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
    movePreview () {//预览区域 右移焦点 
      if (this.activeIndex < 13) {//移到频道列表
        this.$service.move(this.$refs['channel' + (this.activeIndex + 1)][0])
      } else {//移到‘上一页’
        this.$service.move(this.$refs.prevPage)
      }
    },
    leftChannel () {//频道列表 左移焦点
      this.activeIndex > 0 ? this.$service.move(this.$refs['channel' + (this.activeIndex - 1)][0]) : this.$service.move(this.$refs.backPage)
    },
    rightChannel () {//频道列表 右移焦点 
      if (this.activeIndex % 2 == 0) {
        this.$service.move('right')
      } else {
        this.$service.move(this.$refs.preview)
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
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
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
        margin-top: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .epg-button {
          & + .epg-button {
            margin-left: 0.4rem;
          }
        }
      }
    }
    .channel-view {
      margin-left: 1.3rem;
      .preview-wrap {
        margin-bottom: 0.8rem;
        width: 8.4rem;
        height: 4.55rem;

        img {
          width: 100%;
          height: 100%;
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
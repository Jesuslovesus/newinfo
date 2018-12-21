<template>
  <!-- **************************** 省份详情页 **************************-->
  <div class="index-page border-wrap">
    <div class="title" :style="{'background-image': `url(${bgImg(activePlace.value)})`}">
      <h2 class="title-text-one">{{activePlace.label}}</h2>
      <div class="weather-box">天气模块待开发</div>
    </div>
    <div class="con-wrap-text">
      <div class="con-list-box">
        <h3>简介</h3>
        <p class="intro-one">{{activePlace.intro}}</p>
        <Map :placeData="activePlace"></Map>
      </div>
    </div>

    <transition name="fade">
      <el-button class="minority-btn" type="warning" circle @click="minClickBtn" v-if="!assistantMenu">少数<br/>民族</el-button>
    </transition>

    <p class="bottom-end"><i>-- 到底了 --</i></p>    
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Map } from '@/components/components'
import * as types from '@/views/index/store/types'

export default {
  name: '',
  computed: {
    ...mapGetters(['activePlace','assistantMenu'])
  },
  data() {
    return {}
  },
  components: {
    Map
  },
  mounted() {
  },
  methods: {
    bgImg(value){
      try {
        return require(`./../../assets/img/index/${value}.jpeg`)
      } catch (error) {
        // eslint-disable-next-line
        return require(`./../../assets/img/index/yunnan.jpeg`)
      }
    },
    minClickBtn(){
      // document.documentElement.scrollTop = 0
      this.$store.commit(types.APP_ASSISTANT_MENU, true)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
// @import '../../assets/style/index.less';
.index-page {
  // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  // overflow-y: auto;
  // overflow-x: hidden;
  background-color: @white;
  .title{
    width: 100%;
    height: 190px;
    background-size: cover; 
    position: relative;
    .weather-box{
      width: 50%;
      height: 50%;
      position: absolute;
      right: 0;
      bottom: 0;
      color: #ffffff;
      font-size: 30px;
    }
  }
  .minority-btn{
    opacity: .8;
    position: fixed;
    bottom: 12px;
    right: 12px;
    width: 50px;
    height: 50px;
    padding: 0;
    z-index: 2;
  }
  // 飞出
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: translateX(0px) translateY(0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    // opacity: 0;
    transform: translateX(100px) translateY(0px);
  }
}
</style>

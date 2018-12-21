<template>
  <div id="app" :class="{'mview': menuState}">
      <!-- 开场动画 -->
      <div ref="loadingBox" class="loading flex-vertical-center" v-if="anidisplay">
        <div ref="loadingText">
          <!-- <h2>Into Minority</h2> -->
          <p>
            你们要过去得为业的那地<br/>
            乃是有山有谷、雨水滋润之地，<br/>
            是耶和华—你 神所眷顾的；<br/>
            从岁首到年终，<br/>
            耶和华—你 神的眼目时常看顾那地。
          </p>
          <p>
            <i>申命记 11:11-12</i>
          </p>
        </div>
      </div>

      <!-- 登录 v-else -->
      <login v-else></login>
      
      <!-- <router-view class="view-wrap"></router-view> -->
      <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { addClass } from '@/common/utils/dom.js'
import { isWeChat } from '@/common/utils.js'
import * as types from '@/views/index/store/types'
import login from '@/views/index/pages/login'
export default {
  name: 'app',
  computed: {
    ...mapGetters(['menuState'])
  },
  data(){
    return{
      anidisplay: true
    }
  },
  mounted() {
    // 检测页面大小，存入vuex
    this.$store.commit(types.APP_INNER_SIZE,{width: window.innerWidth,height: window.innerHeight})
    window.onresize = () => {
      this.$store.commit(types.APP_INNER_SIZE,{width: window.innerWidth,height: window.innerHeight})
    }
    // 判断是否为微信浏览用于提醒
    if(isWeChat()){
      this.$message({
        showClose: true,
        message: '请使用手机浏览器体验更佳',
        duration: 5000,
        type: 'warning'
      })
    }
    this.$nextTick(()=>{
      addClass(this.$refs.loadingBox,'loading-box-ani')
      addClass(this.$refs.loadingText,'loading-ani')
      this.$refs.loadingText.addEventListener('animationend', ()=>{
        this.anidisplay = false
      })
    })
  },
  methods: {
  },
  components: {
    login
  }
}
</script>

<style scoped lang="less">

#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all .5s;
  width: 100%;
  // height: 100%;
  .loading-box-ani.loading{
    animation:loadingBox 1s linear 2s;
    -webkit-animation:loadingBox 1s linear 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  .loading{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    background-color: #ffffff;
    opacity: 1;
    
    .loading-ani{
      animation:loading 3s;
      -webkit-animation:loading 3s;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
    }
    div{
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      opacity: 0;
      h2{
        font-size: 30px;
        line-height: 40px;
        text-align: center;

      }
      p{
        width: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
      }
      p:last-child{
        font-size: 12px;
        line-height: 38px;
        color: #606266;
      }
    }
    
  }
}

@keyframes loading
{
  0% {opacity: 0;}
  50% {opacity: 1;}  
  75% {opacity: 1;}  
  100% {opacity: 0;}
}

@keyframes loadingBox
{
  from {opacity: 1;}
  to {opacity: 0;}
}
</style>
<style lang="less">
#app{
  .el-dialog{
    // margin-top: 8vh;
    max-width: 380px;
  }
}
</style>


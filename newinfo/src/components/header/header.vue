<template>
  <div class="header-wrap flex-vertical-center">
    

    <!-- <div class="screen-full-icon" v-if="screenfull">
      <screenfull></screenfull>
    </div> -->
    <div class="login-btn flex-vertical-center" v-if="title.includes('login')">
      <i class="iconfont icon-yonghu" @click="loginClick"></i>
    </div>

    <div class="menu-btn flex-vertical-center" v-if="title.includes('search')">
      <i class="el-icon-search" @click="menuClick('search')"></i>
    </div>

    <div class="menu-btn flex-vertical-center" v-if="title.includes('menu')">
      <i class="el-icon-more menu" :style="{'color': menuBtnColor}" @click="menuClick('menu')"></i>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import screenfull from '../screenfull/index'
import { APP_MENU_STATE, APP_LOGIN_BOX, APP_INDEX_MENU_STATE } from '@/views/index/store/types'
export default {
  props: {
    // screenfull: {
    //   type: Boolean,
    //   default: false
    // },
    title: {
      type: Array,
      default: ['menu']
    },
    login: {
      type: Boolean,
      default: false
    },
    types: {
      type: Boolean,
      default: true
    }
  },
  name: '',
  computed: {
    ...mapGetters(['menuBtnColor'])
  },
  data() {
    return {}
  },
  components: {
    // screenfull
  },
  mounted() {},
  methods: {
    menuClick(value){
      if(value === 'menu'){
        if(this.types){
          this.$store.commit(APP_MENU_STATE, true)
          return
        }
        this.$store.commit(APP_INDEX_MENU_STATE, true)
        return
      }
      this.$router.push({path: '/layout/minoritys'})
    },
    loginClick(){
      this.$store.commit(APP_LOGIN_BOX, true)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.header-wrap {
  width: 100%;
  height: 100%;
  >div{
    height: 100%;
    box-sizing: content-box;
    padding: 0 6px;
    i{
      cursor: pointer;
    }
  }
  .login-btn{
    // padding: 21px 21px 0 0;
    i{
      color: #ffffff;
      font-size: 30px;
    }
    
  }
  .screen-full-icon {
    float: right;
    height: 30px;
    width: 30px;
    color: @white;
    overflow: hidden;
  }
  .menu-btn{
    // width: 23px;
    // height: 18px;
    overflow: hidden;
    float: right;
    // padding: 21px 21px 0 0;
    i{
      color: #ffffff;
      font-size: 30px;
    }
  }
}
</style>

<template>
  <div class="menu-wrap">
    <p>
      <i class="el-icon-close" @click="menuClick"></i>
    </p>
    <div class="menu-list-flex">
      <el-menu :router="true">
        <div class="menu-box" v-for="(item,index) in listData" :key="index"  @click="menuClick(item.path)">
          <el-menu-item :index="router(item.path)">
            <i :class="item.icon"></i>
            <span>{{item.value}}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import * as types from '@/views/index/store/types'
export default {
  props: {
    listData: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: 'layout'
    }
  },
  computed: {
    // ...mapGetters(['listData'])
  },
  name: '',
  data() {
    return {
      path: ['index','addnation'],
      noClose: ['addnation','pray']
    }
  },
  components: {
  },
  mounted() {
    // console.log(this.listData)
  },
  methods: {
    // 路由过滤，在router.beforeEach里检测慢了一步，所以写在这里
    router(path){
      if(this.path.includes(path)){
        return `/${path}`
      }
      return `/${this.type}/${path}`
    },
    menuClick(path){
      if(this.noClose.includes(path)){
        return
      }
      this.$store.commit(types.APP_MENU_STATE, false)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.menu-wrap {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  p{
    position: absolute;
    top: 0;
    left: 0;
    padding: 18px 0 0 16px;    
    font-size: 30px;
    color: @white;
  }
  .menu-list-flex{
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .el-menu{
    background-color: transparent;
    border: none;
    .el-menu-item:focus, .el-menu-item:hover{
      background-color: transparent;
      // i,span{
        // color: @blue-dark;
      // }
    }
    .el-menu-item{
      i{
        margin: 0 15px 0 10px;
      }
    }
    li{
      padding-left: 40px !important;
      i,span{
        color: @white;  
        font-size: 20px;              
      }
    }
  }
}
</style>

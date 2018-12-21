<template>
  <!-- ******************** 在主页的专属快速跳转菜单 ************************* -->
  <div class="index-menu-wrap">
    <p>
      <i class="el-icon-close" @click="menuClick"></i>
    </p>
    <div class="menu-list-flex">
      <el-menu :router="true">
        <!-- 登录 -->
        <el-menu-item :index="''" class="login" v-if="!userInfo" @click="login">
          <i class="iconfont icon-yonghu"></i>
          <span>Login</span>
        </el-menu-item>

        <hr v-if="!userInfo" />

        <div class="menu-box" v-for="(item,index) in listData" :key="index" @click="menuClick">
          <el-menu-item :index="router(item.path)">
            <i :class="item.icon"></i>
            <span>{{item.value}}</span>
          </el-menu-item>
        </div>

        <hr v-if="!userInfo" />

        <!-- 登出 -->
        <el-menu-item :index="''" class="login" v-if="!userInfo" @click="logout">
          <i class="iconfont icon-logout"></i>
          <span>Logout</span>
        </el-menu-item>

      </el-menu>
    </div>
    <p>©2018 Into Minority</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { APP_INDEX_MENU_STATE, APP_LOGIN_BOX } from '@/views/index/store/types'
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
    ...mapGetters(['userInfo'])
  },
  name: '',
  data() {
    return {
      path: ['index', 'addnation']
    }
  },
  components: {},
  mounted() {
    // console.log(this.listData)
  },
  methods: {
    // 路由过滤，在router.beforeEach里检测慢了一步，所以写在这里
    router(path) {
      if (this.path.includes(path)) {
        return `/${path}`
      }
      return `/${this.type}/${path}`
    },
    menuClick() {
      this.$store.commit(APP_INDEX_MENU_STATE, false)
    },
    login() {
      this.$store.commit(APP_LOGIN_BOX, true)
    },
    logout() {}
  }
};
</script>

<style scoped lang="less">
// @import '../../assets/style/color.less';
.index-menu-wrap {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  background: #ffffff;
  > p:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    padding: 18px 0 0 16px;
    font-size: 30px;
    color: #000000;
  }
  > p:last-child {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    padding-bottom: 10px;
  }
  .menu-list-flex {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-menu {
    background-color: transparent;
    border: none;
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: transparent;
      // i,span{
      // color: @blue-dark;
      // }
    }
    .el-menu-item {
      i {
        margin: 0 15px 0 10px;
      }
    }
    li {
      padding-left: 40px !important;
      i,
      span {
        color: #000000;
        font-size: 20px;
      }
    }
    .login {
      i {
        margin-left: 12px;
      }
    }
  }
  hr {
    margin-left: 50px;
    margin-right: 10px;
  }
}
</style>

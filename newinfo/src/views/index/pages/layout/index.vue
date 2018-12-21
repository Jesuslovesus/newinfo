<template>
  <div  :class="[{'open-menu': menuState},'app-wrapper']">
    <!-- 主菜单 -->
    <transition name="fade">
      <div class="menu-box" v-if="menuState">
        <menu-list :listData="menuPermission"></menu-list>
      </div>
    </transition>
    
    <!-- 顶部导航 -->
    <header class="header-top" v-if="!menuState">
      <header-top :title="['menu']"></header-top>
    </header>
    <!-- 副菜单（显示少数民族列表等） -->
    <transition name="fade">
      <div class="assistant-menu-box" v-if="assistantMenu" >
        <assistant-menu v-clickoutside="outSideClick" :listData="minorityList"></assistant-menu>
        <div class="assistant-menu-mask" @click="minClickBtn"></div>
      </div>
    </transition>

    <!-- <transition name="fade">
      <footer v-if="menuState">
        <el-button type="text" v-if="1">Logout</el-button>   
        <el-button type="text" v-else>Login</el-button>               
      </footer>
    </transition> -->
    
    <!-- 内容 -->
    <div :class="[{'mx-view': innerSize.level === 'mx'},'view-box']">
      <router-view></router-view>
      <div class="mask" v-if="menuState" @click="viewClick"></div>
    </div>
  </div>
</template>

<script>
import { appMenu } from '@/components/components'
export default {
  name: 'layout',
  extends: appMenu
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../../../assets/style/app-menu.less';
  footer{
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    text-align: center;
    button{
      color: #ffffff;
      font-size: 16px;
    }
    .el-button--text:focus, .el-button--text:hover {
        color: #ffffff;
        border-color: transparent;
        background-color: transparent;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: translateX(0px);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-400px);
  }
</style>

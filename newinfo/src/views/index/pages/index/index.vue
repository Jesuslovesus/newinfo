<template>
  <div class="place-wrap">
    <!-- 首页 -->
    <div class="con-wrap">
      <h2 class="title-text-one">Place</h2>
      <!-- 顶部导航 -->
      <header class="header-top">
        <header-top :title="['search','','menu']" :types="false"></header-top>
      </header>
      <!-- table -->
      <div class="table-title flex-vertical-center">
        <el-button :class="{'active': showTable == 'today'}" size="small" @click="btnClick('today')">今日民族</el-button>
        <el-button :class="{'active': showTable == 'place'}" size="small" @click="btnClick('place')">省份列表</el-button>
      </div>    

      <!-- table wrap -->

      
      <div class="carousel-wrap flex-vertical-center">

        <el-carousel :interval="5000" :autoplay="false" arrow="never" height="400px" indicator-position="none" ref="carousel">
              <!-- 今日民族 -->
              <el-carousel-item class="item-box" :name="'today'">
                <div class="today-content flex-vertical-center">
                  每天推送的一个民族，开发中
                </div>
              </el-carousel-item>
              <!-- 展示选中省份的轮播（indexShow字段） -->
              <el-carousel-item class="item-box" :name="'place'">
                <!-- :height="`${innerSize.height/10*6}px`" -->
                <el-carousel :interval="5000" type="card" height="386px" arrow="always" :autoplay="proAutoplay">
                  <el-carousel-item v-for="(item, index) in place" :key="index">
                    <div class="con-box"  @click="placeClick(item)">
                      <div :style="{'background-image': `url(${bgImg(item.value)})`}" class="img-box">
                      </div>
                      <p>{{item.label}}</p>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 更多菜单 -->
    <!-- 副菜单（显示少数民族列表等） -->
    <transition name="fade">
      <div class="index-menu-box" v-if="indexMenuState" >
        <index-menu v-clickoutside="closeMenu" :listData="indexMenuList"></index-menu>
        <div class="index-menu-mask" @click="closeMenu"></div>
      </div>
    </transition>

  </div>
</template>

<script>
/**
 * 提高首页加载速度，此页面跟layout同级，打开网站后直接进入此页面
 */
import { mapGetters } from 'vuex'
import { HeaderTop, IndexMenu } from '@/components/components'
import { APP_INDEX_MENU_STATE } from '@/views/index/store/types'
export default {
  name: '',
  computed: {
    ...mapGetters(['placeListShow','innerSize','indexMenuState','indexMenuList']),
    place(){
      return this.placeListShow
    }
  },
  data() {
    return {
      showTable: 'today',
      proAutoplay: false
    }
  },
  mounted() {
    this.$nextTick(()=>{
      // console.log(this.innerSize)
      this.init()
    })
  },
  components: {
    HeaderTop,
    IndexMenu
  },
  methods: {
    init(){
      this.$store.dispatch('Get_Place')
    },
    bgImg(value){
      try {
        return require(`@/assets/img/index/${value}.jpeg`)
      } catch (error) {
        // eslint-disable-next-line
        return require(`@/assets/img/index/yunnan.jpeg`)
      }
    },
    placeClick(list){
      if(list.show){
        this.$store.dispatch('Get_activePlace',list.id).then(()=>{
          this.$router.push({path: '/layout/place'})
        })
        return
      }
      this.$message({
        showClose: true,
        message: '正在录入',
        type: 'warning'
      })
    },
    closeMenu(){
      this.$store.commit(APP_INDEX_MENU_STATE, false)
    },
    btnClick(index){
      this.showTable = index
      this.$refs.carousel.setActiveItem(index)
      if(index === 'place'){
        this.proAutoplay = true
        return
      }
      this.proAutoplay = false
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../../assets/style/color.less';

.place-wrap {
  min-height: 100vh;
  background-color: @blue-dark;
  box-sizing: border-box;
  .active{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .today-content{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .con-wrap {
    height: 100%;
  }
  .header-top{
    width: 92px;
  }
  .table-title{
    height: 60px;
  }
  .carousel-wrap{
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
    .el-carousel {
      // margin-top: 80px;
      width: 100%;
    }
    .item-box {
      
      .el-carousel__item {
        overflow: inherit;
      }
      .con-box{
        box-shadow: 0px 0 6px rgba(0,21,41,.35);      
        margin-left: -25%;
        width: 150%;
        height: 100%;
        background-color: antiquewhite;
        .img-box{
          width: 100%;
          height: 316px;
          overflow: hidden;
          text-align: center;
          background-size: 200% 100%; 
          background-repeat: no-repeat; 
          background-position: 25% 0;
        }
        p{
          font-size: 22px;
          text-align: center;
          background: @white;
          padding: 24px 0;
        }
      }
    }
    
  }
  // 菜单
  .index-menu-box{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    height: 100vh;
    width: 100%;
    display: flex;
    .index-menu-wrap{
      flex-basis: 70%;
      // flex-grow: 4;
    }
    .index-menu-mask{
      flex-basis: 30%;
      // flex-grow: 1;
      background: rgba(0,0,0,.3);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: translateX(0px);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-400px);
  }
}
</style>


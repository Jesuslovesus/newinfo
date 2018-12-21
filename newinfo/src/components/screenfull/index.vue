<template>
  <div class="screen-full-box">
    <el-tooltip class="item" effect="dark" :content="titleMsg" placement="bottom">
      <i class=" el-icon-rank" @click="screenFullClick(false)"></i>
    </el-tooltip>
    <!-- <i class=" el-icon-rank" @click="screenFullClick(true)" :title="titleMsg"></i> -->
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: '',
  data() {
    return {
      isFullscreen: false,
      titleMsg: '全屏模式'
    }
  },
  components: {},
  mounted() {},
  methods: {
    screenFullClick(m) {
      if (!screenfull.enabled) {
        this.$message({
          message: '浏览器不支持',
          type: 'warning'
        })
      }
      // screenfull.request()
      screenfull.toggle()
      if (this.isFullscreen) {
        screenfull.exit()
        this.isFullscreen = false
        this.titleMsg = '全屏模式'
      } else {
        screenfull.request()
        this.isFullscreen = true
        this.titleMsg = '退出全屏'
      }

      // 写入vuex，判断什么模式的全屏
      return m
    }
  }
}
</script>

<style scoped lang="less">
.screen-full-box {
  width: 100%;
  height: 100%;
  i {
    color: #606266;
    position: relative;
    font-size: 30px;
    transform: rotate(45deg);
    cursor: pointer;
  }
}
</style>

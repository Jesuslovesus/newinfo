<template>
  <!-- <div class="login-wrap"> -->
    <el-dialog
        title="登录 获取更多操作"
        :visible="loginBox"
        @close="close"
        width="80%">
        <el-input
          placeholder="用户名"
          v-model="username">
          <!-- <i slot="suffix" class="el-icon-close" @click="aa"></i> -->
        </el-input>
        <el-input
          placeholder="密码"
          v-model="password">
          <!-- <i slot="suffix" class="el-icon-close"></i> -->
        </el-input>
        <p>
          <el-button size="medium" type="primary" @click="login">登 录</el-button>
          <el-button size="medium" type="success" @click="register">注 册</el-button>
        </p>
    </el-dialog>
    
  <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
import { APP_LOGIN_BOX } from '../../store/types'
export default {
  name: '',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['loginBox'])
  },
  components: {},
  mounted() {},
  methods: {
    close(){
      this.$store.commit(APP_LOGIN_BOX, false)
    },
    login(){
      this.$message({
        showClose: true,
        message: '暂未开放',
        type: 'warning',
        center: true
      })
      // this.$store.commit(APP_MENU_STATE, false)
    },
    register(){
      this.$message({
        showClose: true,
        message: '暂未开放',
        type: 'warning',
        center: true
      })
    }
  }
}
</script>

<style scoped lang="less">
// .login-wrap{
  .el-input{
    margin-bottom: 16px;
  }
  p{
    text-align: center;
  }
// }

</style>

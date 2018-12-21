<template>
  <div class="minority-list-wrap">
    <!-- 下次把下边的结构封装，有必要的话 -->
    <div class="search-box">
      <div class="search-center-wrap">
        <searcher v-if="statusType" :placeholder="'请输入民族名称或拼音'" type="simple" :searchData="minorityListAll" :searchKeys="sourceKeys" @search="globalSearch"></searcher>
        <searcher v-else :placeholder="'请输入省份名称或拼音'" type="simple" :searchData="placeListData" :searchKeys="sourceKeys" @search="placeGlobalSearch" @focus="focus" @blur="blur"></searcher>
        
        <!-- <el-select @change="selectChange" size="small" v-else v-model="provinces" filterable :filter-method="handleCityFilter" 
          placeholder="请输入省份名称或拼音">
          <el-option
            v-for="item in searchProvinces"
            :key="item.name"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select> -->
        <el-button size="small" type="primary" @click="typeBtn(false)" v-if="statusType">省份</el-button>
        <el-button size="small" type="success" @click="typeBtn(true)" v-else>民族</el-button>

        <!-- 筛选省份时弹出 -->
        <div class="select-place" v-if="selectplace">
          <el-button size="small" v-for="(item,index) in searchProvinces" :key="index" @click="selectPlace(item.id)" >
            <!-- <i class="iconfont icon-jiaobiao-rt"></i> -->
            <span v-html="item.label"></span>
          </el-button>
        </div>
      </div>
    </div>
    <div class="minority-content">
      <p v-if="statusType || !provincesId">
        {{provincesLabel}} <span class="nums">{{nums}}</span>
      </p>
      <p v-else>
        <el-button type="text" @click="provincesClick">
          {{provincesLabel}} <span class="nums">{{nums}}</span>
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </p>
        
      <ul>
        <li v-for="(item,index) in resultData" :key="index" @click="menuClick(item)" >
          <i class="iconfont icon-jiaobiao-rt"></i>
          <span v-html="item.label"></span>
        </li>
      </ul>
      <!-- <div class="test"></div> -->
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searcher from '@/components/searcher/main'
import * as types from '@/views/index/store/types'
// import { searchfiler } from '@/common/utils'


export default {
  name: '',
  computed: {
    ...mapGetters(['minorityListAll','placeListShow']),
    placeListData(){
      return this.placeListShow
    },
    nums(){
      return this.resultData.length
    }
  },
  data() {
    const text = '已录入的少数民族'
    return {
      text,
      sourceKeys: ['label','name'],
      resultData: [],
      statusType: true,
      provincesLabel: text,
      provincesId: '',
      searchProvinces: [],
      selectplace: false
    }
  },
  components: {
    searcher
  },
  mounted() {
    this.searchProvinces = JSON.parse(JSON.stringify(this.placeListData))
    // 获取所有的少数民族
    this.$store.dispatch('Get_minorityListAll').then(data =>{
      this.resultData = data
    })
  },
  methods: {
    globalSearch(val) {
      this.resultData = val.data
    },
    placeGlobalSearch(val) {
      this.searchProvinces = val.data
    },
    menuClick(value){
    // 获取指定少数民族详细信息
      this.$store.dispatch('Get_minorityContent', value.id)
      this.$store.commit(types.APP_ASSISTANT_MENU, false)
      // 后期做两个，判断屏幕大小选择进入不同的路由页面
      this.$router.push({path: '/layout/minority'})
    },
    typeBtn(val) {
      this.provincesLabel = this.text
      if(val){
        this.$store.dispatch('Get_minorityListAll').then(data =>{
          this.resultData = data
        })
        this.provincesId = ''
        this.selectplace = false
        this.statusType = true
      }
      if(!val){
        this.selectplace = true
        this.statusType = false
      }
    },
    // handleCityFilter(val) {
    //   this.searchProvinces = searchfiler(false ,val, this.placeListData, this.sourceKeys)
    // },
    selectPlace(id){
      this.provincesId = id
      this.placeListData.map((item)=>{
        item.id === id ? this.provincesLabel = item.label : null
      })
      this.selectplace = false
      // 获取指定省份的少数民族
      this.$store.dispatch('Get_minorityList', id).then(data =>{
        this.resultData = data
      })
    },
    // 进入省份详情页
    provincesClick(){
      this.$store.dispatch('Get_activePlace',this.provincesId).then(()=>{
        this.$router.push({path: '/layout/place'})
      })
    },
    focus(val){
      this.selectplace = val
    },
    blur(val){
      setTimeout(()=>{
        this.selectplace = val
      },0)
    }
  }
}
</script>

<style scoped lang="less">
.minority-list-wrap{
  box-sizing: border-box;
  padding: 60px 12px;
  min-height: 100vh;
  .search-box{
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    
    // margin-top: -50px;
    .search-center-wrap{
      box-sizing: border-box;
      padding: 14px 12px 10px;      
      background-color: #ffffff;       
      width: 100%;
      height: 60px;
      max-width: 1000px;
      margin: 0 auto;
      box-shadow: 0 0 6px #cccccc;
      .searcher{
        width: 192px;
      }
      .el-button,.searcher,.el-select{
        float: left;
      }
      .el-button{
        margin-left: 12px;
      }
    }
    
  }
  ul{
    border: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li:hover{
      background-color: #ffffff;    
      // transform: scale3d(1.1,1.1,1.1); 
      font-size: 16px;
    }
    li{

      cursor: pointer;
      transition: all .5s;
      
      box-sizing: border-box;
      background-color: rgb(231,242,255);
      border: 1px solid #ffffff;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      box-sizing: border-box;
      // border: 1px #cccccc solid;
      padding: 0 !important;
      flex-basis: 20%;
      // width: 20%;
      // max-width: 25%;
      // min-width: 20%;
      text-align: center;
      position: relative;
      overflow: hidden;
      i{
        position: absolute;
        top: 0;
        right: 0;
        line-height: 10px;
        font-size: 10px;
        color: #409EFF;
      }
    }
  }
  .select-place{
    position: absolute;
    top: 60px;
    left: 0;
    box-sizing: border-box;
    padding: 12px 0 0;
    text-align: center;
    // overflow: hidden;
    width: 100%;
    height: 200px;
    background-color: rgba(0,0,0,.4);
    button{
      margin: 0 6px !important;
      float: none !important;
    }
  }
  .minority-content{
    .nums{
      font-size: 14px;
      color: #0B0B0B;
    }
    >p{
      height: 60px;
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      padding: 10px;
      .el-button{
        padding: 0;
        font-size: 18px;
      }
    }
    
  }
}

</style>

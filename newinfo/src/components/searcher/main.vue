<template>
  <div class="searcher">
    <el-input size="small" :placeholder="placeholder" v-model="search" v-if="type === 'simple'" @focus="focus" @blur="blur">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>      
    </el-input>
    <div v-else>
      <el-button size="small" type="primary" @click="switchBtn" v-show="!isSearch">
        <i class="fontfamily yd-icon-search"></i>
      </el-button>
      <el-input size="small" ref="searchInput" :placeholder="placeholder" v-model="search" v-show="isSearch" :autofocus="isFocus">
      </el-input>
    </div>
  </div>
</template>

<script>
import { searchfiler } from '@/common/utils'

export default {
  name: 'searcher',
  components: {
  },
  directives: {
  },
  props: {
    type: {
      type: String,
      default: 'simple'
    },
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    searchData: {
      type: Array,
      default: []
    },
    searchKeys: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: '#f56c6c'
    }
  },
  data() {
    return {
      search: '',
      isSearch: false,
      isFocus: false
    }
  },
  methods: {
    switchBtn() {
      this.isSearch = true
      this.isFocus = true
    },
    searchBlur() {
      this.isSearch = false
    },
    focus(){
      this.$emit('focus', true)
    },
    blur(){
      this.$emit('blur', false)
    }
  },
  watch: {
    search(val) {
      this.$emit('search', { data: searchfiler(true, val, this.searchData, this.searchKeys, this.color), value: this.search })
    }
  }
}
</script>

<style lang="less" scoped>
// .searcher {
  // height: 42px;
// }
</style>

<style lang="less">
.search-strong {
  vertical-align: bottom;
}
</style>



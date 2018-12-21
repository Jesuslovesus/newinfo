import { mapGetters } from 'vuex'
import { menuList, assistantMenu, HeaderTop } from '@/components/components'
import { APP_MENU_STATE, APP_ASSISTANT_MENU } from '@/views/index/store/types'

export default {
  computed: {
    ...mapGetters([
      'menuState',
      'menuPermission',
      'minorityList',
      'assistantMenu',
      'innerSize'
    ])
  },
  data() {
    return {}
  },
  mounted() {
    // 获取菜单权限
    this.$store.dispatch('App_GetFundFirm')
  },
  components: {
    menuList,
    HeaderTop,
    assistantMenu
  },
  methods: {
    viewClick() {
      if (this.menuState) {
        this.$store.commit(APP_MENU_STATE, false)
      }
    },
    outSideClick() {
      this.$store.commit(APP_ASSISTANT_MENU, false)
    },
    minClickBtn() {
      this.$store.commit(APP_ASSISTANT_MENU, false)
    }
  }
}

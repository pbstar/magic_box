<template>
  <div id="app">
    <nav-top v-if="isShowTopNav"
             :fanhui="fanhui"
             :title="title"></nav-top>
    <router-view @func="getfocus"
                 @func2="gettitle" />
    <nav-bar v-if="isShowNav"></nav-bar>
  </div>
</template>
<script>
import NavBar from './components/NavBar'
import NavTop from './components/NavTop'
export default {
  data () {
    return {
      isShowNav: true,
      isShowTopNav: false,
      fanhui: '',
      title: '',
      ShowMenuList: ['Box', 'Sou2', 'Sou1', 'User'] // 允许显示底部导航的路由名称
    }
  },
  methods: {
    getfocus (aa) {
      this.isShowNav = aa
    },
    gettitle (aa) {
      this.title = aa
    }
  },
  components: {
    'nav-bar': NavBar,
    'nav-top': NavTop
  },
  watch: {
    $route (to, form) {
      if (this.ShowMenuList.includes(to.name)) {
        this.isShowNav = true
        this.isShowTopNav = false
      } else {
        this.isShowNav = false
        this.isShowTopNav = true
        this.fanhui = form.path
      }
    }
  }
}
</script>

<template>
  <van-nav-bar :title="title"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft" />
</template>
<script>
// import { Toast } from 'vant'
export default {
  props: ['fanhui', 'title'],
  methods: {
    onClickLeft () {
      // Toast('返回')
      this.$router.push(this.fanhui)
    }
    // onClickRight () {
    //   Toast('按钮')
    // }
  }
}
</script>

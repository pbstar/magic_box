<template>
  <el-container>
    <iframe frameborder="0"
            width="100%"
            :src='src'>
    </iframe>
  </el-container>
</template>
<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
section {
  height: 100% !important;
  box-sizing: border-box !important;
}
iframe {
  margin-bottom: 45px;
  overflow: hidden;
  box-sizing: border-box !important;
}
</style>
<script>
export default {
  data () {
    return {
      src: 'https://www.baidu.com/',
      isbox: true
    }
  },
  created () {
    this.src = this.$route.query.url
    this.$emit('func2', this.$route.query.title)
  },
  methods: {
  }
}
</script>

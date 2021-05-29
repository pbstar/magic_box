<template>
  <div class="home">
    <el-button class="btn"
               v-on:click="Edite()"
               icon="el-icon-search"
               circle></el-button>
    <div class="aa">{{bbb}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bbb: ''
    }
  },
  created () {
    this.$emit('func2', '随机一个笑话')
  },
  methods: {
    async Edite () {
      const res2 = await this.$http.get('https://api.vvhan.com/api/xh')
      this.bbb = res2.data
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(233, 233, 233);
}
.btn {
  margin: 20px auto;
}
.aa {
  width: 80%;
  margin: 0px auto;
}
</style>

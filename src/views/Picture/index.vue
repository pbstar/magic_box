<template>
  <el-container>
    <div class="home">
      <el-button class="btn"
                 v-on:click="Edite()"
                 circle>换一张</el-button>
      <div class="pic"><img :src="imgurl"></div>
    </div>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      iphone: '',
      bbb: '',
      imgurl: ''
    }
  },
  created () {
    this.$emit('func2', '随机风景图')
    this.Edite()
  },
  methods: {
    async Edite () {
      const res = await this.$http.get('https://api.vvhan.com/api/view?type=json')
      const { imgurl } = res.data
      this.imgurl = imgurl
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #d3dce6;
  display: flex;
  flex-direction: column;
}
.btn {
  margin: 20px auto;
}
.pic {
  width: 90%;
  margin: 20px auto;
}
.pic img {
  max-width: 100%;
}
</style>

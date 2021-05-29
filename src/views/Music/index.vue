<template>
  <el-container>
    <div class="home">
      <div class="content">
        <el-button style=" margin: 20px auto;"
                   @click="Edite()"
                   type="warning"
                   class="iconfont  icon-xiayishou btn"
                   circle></el-button>
        <div class="bb">{{auther}}-{{ccc}}</div>
        <div class="dd"><audio class="audi"
                 :src="vide"
                 autoplay="autoplay"
                 controls="">
          </audio></div>
        <div class="cc"><img :src="imgurl"></div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      ccc: '',
      imgurl: '',
      vide: '',
      auther: ''
    }
  },
  created () {
    this.Edite()
    this.$emit('func2', '随机一首歌')
  },
  methods: {
    async Edite () {
      const res = await this.$http.get('https://api.vvhan.com/api/rand.music?type=json&sort=热歌榜')
      this.ccc = res.data.info.name
      this.imgurl = res.data.info.picUrl
      this.vide = res.data.info.mp3url
      this.auther = res.data.info.auther
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #d3dce6;
}
.content {
  position: relative;
  width: 100%;
  top: 58px;
}
.el-button {
  position: relative;
  left: 46%;
  margin: 50px auto;
}
.aa {
  display: block;
  width: 50%;
  height: 20px;
  color: #000;
  margin: 50px auto;
}
.bb {
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  color: rgb(0, 0, 0);
  margin: 10px auto;
}
.cc {
  display: block;
  width: 55%;
  height: 20px;
  color: #37393b;
  margin: 29px auto;
}
.cc img {
  display: block;
  width: 200px;
  margin: 0 auto;
}
audio {
  width: 70%;
  height: 55px;
  display: inline-block;
  margin: 0 15% !important;
}
.dd {
  display: block;
  width: 100%;
  height: 37px;
  color: rgb(0, 0, 0);
  margin: 39px auto;
}
</style>

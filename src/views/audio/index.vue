<template>
  <div class="home">
    <el-input class="text"
              type="textarea"
              autofocus="autofocus"
              :autosize="{ minRows: 4, maxRows: 12}"
              v-model="text"
              placeholder="请输入内容"></el-input>
    <el-button style=" margin: 10px auto 30px;"
               @click="Edite()"
               type="warning"
               class="iconfont  icon-xiayishou btn"
               circle></el-button>
    <div class="aud">
      <audio class="audi"
             :src="vide"
             autoplay="autoplay"
             controls="">
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      vide: ''
    }
  },
  created () {
    this.$emit('func2', '在线文字转语音')
  },
  methods: {
    async Edite () {
      const res = await this.$http.get('https://api.vvhan.com/api/song?txt=' + this.text)
      this.vide = res.config.url
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
.text {
  width: 80%;
  margin: 20px auto;
}
button {
  border: 1px solid #ccc;
}
.aa {
  display: block;
  width: 30%;
  border-bottom: 1px solid #000;
  color: #fff;
  margin: 50px auto;
}
.aud {
  margin: 0 auto;
}
</style>

<template>
  <div class="home">
    <div class="btns">
      <el-input type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="textarea">
      </el-input>
      <el-button class="search"
                 v-on:click="Edite()"
                 circle>提交</el-button>
    </div>
    <div class="picture">
      <img class="img"
           :src="imgurl"
           alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textarea: '',
      imgurl: ''
    }
  },
  created () {
    this.$emit('func2', '在线生成二维码')
  },
  methods: {
    async Edite () {
      this.imgurl = ('https://api.vvhan.com/api/qr?text=' + this.textarea)
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
.btns {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
}
.search {
  margin: 20px auto;
}
.picture {
  width: 170px;
  height: 170px;
  margin: 0 auto;
  background-color: #fff;
}
img {
  width: 170px;
  margin: 0 auto;
}
</style>

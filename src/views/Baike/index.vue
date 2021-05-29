<template>
  <div class="home">
    <el-input placeholder="请输入搜索内容"
              v-model="content"
              class="input-with-select">
      <el-button v-on:click="Edite()"
                 slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>
    <div class="text">
      <div>{{contents}}</div>
      <div class="pic"><img :src="imgurl"
             alt=""></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      content: '',
      contents: '',
      imgurl: ''
    }
  },
  created () {
    this.$emit('func2', '超级百科查询')
  },
  methods: {
    async Edite () {
      const res2 = await axios.get('https://api.muxiaoguo.cn/api/Baike?type=Baidu&word=' + this.content, {
      })
      if (res2.data.code === -4) {
        this.contents = '对不起，您所查询的内容不存在！'
      } else {
        this.contents = res2.data.data.content
        this.imgurl = res2.data.data.ImgUrl
      }
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  background-color: rgb(233, 233, 233);
}
.text {
  width: 90%;
  margin: 20px auto 0;
  font-size: 14px;
}
.pic {
  width: 80%;
  margin-top: 10px;
}
.pic img {
  max-width: 100%;
}
</style>

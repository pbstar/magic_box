<template>
  <div class="home">
    <el-button class="btn"
               v-on:click="Edite()"
               icon="el-icon-search"
               circle></el-button>
    <div style="margin:30px ;"></div>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>{{title}}</span>
        <div class="author">
          <span>{{author}}</span>
        </div>
      </div>
      <div v-for="o in 1"
           :key="o"
           class="text item">
        {{ '' + o }}
        <div>{{content}}</div>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      moveName: '',
      bbb: '',
      pic: '',
      title: '',
      content: '',
      author: ''
    }
  },
  created () {
    this.$emit('func2', '随机故事词')
  },
  methods: {
    async Edite () {
      const res2 = await axios.get('https://api.muxiaoguo.cn/api/Gushici')
      this.title = res2.data.data.Poem_title
      this.content = res2.data.data.Poetry
      this.author = res2.data.data.Poet
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
}
.btn {
  position: relative;
  left: 45%;
  top: 10px;
}
button {
  border: 1px solid #ccc;
}
.content {
  position: relative;
  display: block;
  width: 76%;
  border: 1px solid #ccc;
  color: #000;
  margin: 50px auto;
}
.picture {
  width: 100px;
  height: 100px;
}
.picture img {
  width: 80%;
  height: 95%;
}
.date {
  position: absolute;
  right: 30%;
  bottom: 20px;
  font-size: 50px;
  font-weight: 600;
}
</style>

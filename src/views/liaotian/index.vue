<template>
  <div class="home">
    <div class="footer">
      <input placeholder=""
             v-model="content">
      <button v-on:click="Edite()"
              slot="append">发送</button>
    </div>
    <ul>
      <li v-for="item in word"
          v-bind:key="item">
        <div class="tximgbox"
             v-if="!item.type"
             :class="item.type === true ? 'me':'you'"><img src="https://img1.baidu.com/it/u=2062164223,3783917881&fm=26&fmt=auto&gp=0.jpg"></div>
        <div class="tximgbox"
             v-if="item.type"
             :class="item.type === true ? 'me':'you'"><img :src="meurl"></div>
        <div class="qipao"
             :class="item.type === true ? 'me':'you'">
          <div class="qipaosjz"
               v-if="!item.type"></div>
          <div class="qipaosjy"
               v-if="item.type"></div>
          {{item.text}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      word: [],
      content: '',
      contents: '',
      num: '',
      token: '',
      meurl: 'http://q1.qlogo.cn/g?b=qq&nk=24612582&s=100'
    }
  },
  created () {
    this.$emit('func2', '智能聊天')
    this.token = localStorage.getItem('token')
    this.meurl = 'http://q1.qlogo.cn/g?b=qq&nk=' + this.token + '&s=100'
  },
  methods: {
    async Edite () {
      if (this.content === '') {
        return
      }
      if (this.num > 9) {
        this.word.shift()
        this.word.shift()
      }
      this.word.push({
        text: this.content,
        type: true
      })
      const res2 = await axios.get('http://ai.kenaisq.top/API/lt.php?text=' + this.content)
      if (res2.data.code === 1000) {
        this.num = this.word.push({
          text: res2.data.text,
          type: false
        })
      }
      this.content = ''
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
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 5%;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  padding: 10px;
}
li {
  width: 100%;
  overflow: auto;
  margin-bottom: 10px;
}
.you {
  float: left;
  background-color: #fff;
}
.me {
  float: right;
  background-color: rgb(49, 212, 76);
}
.tximgbox {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
}
.tximgbox img {
  width: 50px;
  height: 50px;
}
.qipao {
  max-width: 70%;
  padding: 5px 10px;
  line-height: 30px;
  border-radius: 5px;
  position: relative !important;
}
.qipao.you {
  margin-left: 10px;
}
.qipaosjz {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid #fff;
  border-left: 10px solid transparent;
  position: absolute;
  left: -5px;
  top: 12px;
  transform: rotate(135deg);
}
.qipao.me {
  margin-right: 10px;
}
.qipaosjy {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid rgb(49, 212, 76);
  border-left: 10px solid transparent;
  position: absolute;
  right: -5px;
  top: 18px;
  transform: rotate(-45deg);
}
.footer input {
  width: 80%;
  height: 40px;
  background-color: rgb(233, 233, 233);
  border: none;
  padding-left: 10px;
  box-sizing: border-box;
}
.footer button {
  width: 20%;
  border: none;
  height: 40px;
}
</style>

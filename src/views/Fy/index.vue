<template>
  <el-container class="box">
    <div class="inbox"><textarea autofocus="autofocus"
                v-model="aaaa"></textarea></div>
    <div class="pbox">
      <p v-on:click="loadData">开始翻译</p>
    </div>
    <div class="inbox">
      <span>以下为翻译结果：</span><textarea readonly="readonly"
                v-model="bbbb"></textarea>
    </div>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      aaaa: '',
      bbbb: ''
    }
  },
  created () {
    this.$emit('func2', '在线英汉互译')
  },
  methods: {
    async loadData () {
      console.log(this.aaaa)
      const res = await this.$http.get('https://api.vvhan.com/api/fy?text=' + this.aaaa)
      const { fanyi } = res.data.data
      this.bbbb = fanyi
    }
  }
}
</script>
<style>
.box {
  margin-top: 0px;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column !important;
}
.pbox {
  width: 80%;
}
.pbox p {
  text-align: center;
  padding: 10px 0;
  background-color: rgb(236, 234, 234);
  border-radius: 5px;
}
.inbox span {
  margin-bottom: 0;
  color: rgb(47, 48, 49);
}
.inbox {
  height: 22%;
  width: 80%;
  margin: 30px auto;
  box-sizing: border-box;
  display: block;
}
textarea {
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  font-size: 15px;
}
</style>

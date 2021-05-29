<template>
  <div class="home">
    <el-input placeholder="请输入手机号码"
              v-model="number"
              class="input-with-select">
      <el-button v-on:click="Edite()"
                 slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>
    <div class="xinxi"
         v-if="code">查询失败</div>
    <div class="xinxi"
         v-if="code2">
      <h4>手机号地址信息</h4>
      <div class="show">手机归属地：{{local}}</div>
      <div class="show">所属运营商：{{yys}}</div>
      <h4>手机号安全信息</h4>
      <div class="show">百度手机卫士：{{baidu}}</div>
      <div class="show">搜狗号码通：{{sougou}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: '',
      local: '',
      yys: '',
      baidu: '',
      sougou: '',
      code: false,
      code2: false
    }
  },
  created () {
    this.$emit('func2', '手机号码查询')
  },
  methods: {
    async Edite () {
      const res2 = await this.$http.get('https://api.vvhan.com/api/phone?tel=' + this.number)
      const res3 = await this.$http.get('https://api.vvhan.com/api/saorao?tel=' + this.number)
      if (res2.data.code === -2 || res3.data.success === false) {
        this.code2 = false
        this.code = true
      } else {
        this.code2 = true
        this.code = false
        const { local, yys } = res2.data.info
        this.local = local
        this.yys = yys
        this.baidu = res3.data.info[0].message
        this.sougou = res3.data.info[1].message
      }
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(233, 233, 233);
  padding-top: 20px;
}
.xinxi {
  margin-top: 10px;
  padding: 0 20px;
  line-height: 30px;
  font-size: 14px;
}
.xinxi h4 {
  text-align: center;
}
</style>

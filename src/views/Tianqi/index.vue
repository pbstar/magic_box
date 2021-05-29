<template>
  <div class="home">
    <el-input placeholder="请输入城市名称"
              v-model="names"
              class="input-with-select">
      <el-button v-on:click="Edite()"
                 slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>
    <div v-if="code"
         class="xinxi">查询失败</div>
    <div class="xinxi"
         v-if="code2">
      <div class="aa">日期：{{date}}</div>
      <div class="aa">天气：{{type}}</div>
      <div class="aa">风向：{{fengxiang}}</div>
      <div class="aa">风级：{{fengli}}</div>
      <div class="aa">气温：{{height}}--{{low}}</div>
      <div class="aa">温馨提示：{{tipe}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: '',
      names: '',
      fengxiang: '',
      fengli: '',
      height: '',
      low: '',
      tipe: '',
      type: '',
      code: false,
      code2: false
    }
  },
  created () {
    this.$emit('func2', '全国天气查询')
  },
  methods: {
    async Edite () {
      const res = await this.$http.get('https://api.vvhan.com/api/weather?city=' + this.names)
      if (res.data.success === false) {
        this.code = true
        this.code2 = false
      } else {
        this.code = false
        this.code2 = true
        const { date, fengli, high, low, tip, type, fengxiang } = res.data.info
        this.date = date
        this.fengli = fengli
        this.fengxiang = fengxiang
        this.height = high
        this.low = low
        this.tipe = tip
        this.type = type
      }
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
  padding-top: 20px;
}
.xinxi {
  margin-top: 10px;
  padding: 0 20px;
  line-height: 30px;
}
</style>

<template>
  <div class="home">
    <el-input placeholder="请输入要查询的成语"
              v-model="content"
              class="input-with-select">
      <el-button v-on:click="Edite()"
                 slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>
    <div class="clearfix">
      <div v-if="code">查询失败</div>
      <div v-if="code2"><span>拼音：{{pingyin}}</span></div>
      <div v-if="code2"><span>接龙：{{name}}</span></div>
      <div v-if="code2"><span>解释：{{jieshi}}</span></div>
      <div class="author"
           v-if="code2">
        <span>出处：{{chuchu}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      content: '',
      createTime: '',
      chuchu: '',
      jieshi: '',
      name: '',
      pingyin: '',
      code: false,
      code2: false
    }
  },
  async created () {
    this.$emit('func2', '成语接龙')
  },
  methods: {
    async Edite () {
      const res2 = await axios.get('https://api.muxiaoguo.cn/api/chengyujielong?word=' + this.content, {
      })
      if (res2.data.code === -2) {
        this.code = true
        this.code2 = false
      } else {
        this.code = false
        this.code2 = true
        const { chuchu, jieshi, name, pingyin } = res2.data.data
        this.chuchu = chuchu
        this.jieshi = jieshi
        this.name = name
        this.pingyin = pingyin
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
.clearfix {
  margin-top: 10px;
  padding: 0 20px;
  line-height: 30px;
}
</style>

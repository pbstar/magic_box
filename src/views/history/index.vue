<template>
  <div class="home">
    <div v-for="itm in bbb"
         :key="itm.id"
         class="content">
      <h5>
        {{ itm.title}}
      </h5>
      <div class="picture">
        <div> {{itm.des}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bbb: ''
    }
  },
  async created () {
    this.$emit('func2', '历史的今天')
    const res2 = await this.$http.get('https://api.oioweb.cn/api/lishi.php')
    this.bbb = res2.data.result.reverse()
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgb(233, 233, 233);
}
.content {
  border-bottom: 1px solid rgb(194, 194, 194);
  margin: 5px 0;
}
.picture {
  font-size: 14px;
  display: flex;
}
</style>

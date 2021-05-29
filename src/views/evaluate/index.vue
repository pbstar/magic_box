<template>
  <div class="home">
    <div class="picurl">
      <img :src="picurl"
           alt=""
           srcset="">
    </div>
    <div class="name">
      <h4>{{name}}--{{artistsname}}</h4>
    </div>
    <div class="url">
      <audio :src="url"
             autoplay="autoplay"
             controls="">
      </audio>
    </div>
    <div class="pl">
      <div class="avatarurl">
        <img :src="avatarurl"
             alt=""
             srcset="">
      </div>
      <div class="nickname">
        <h5>{{nickname}}</h5>
        <span>{{content}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      url: '',
      picurl: '',
      artistsname: '',
      avatarurl: '',
      nickname: '',
      content: ''
    }
  },
  async created () {
    this.$emit('func2', '网易云热评')
    this.Edite()
  },
  methods: {
    async Edite () {
      const res = await this.$http.get('https://api.dzzv.cn/api/wyypl?format=json')
      this.name = res.data.data.name
      this.url = res.data.data.url
      this.picurl = res.data.data.picurl
      this.artistsname = res.data.data.artistsname
      this.avatarurl = res.data.data.avatarurl
      this.nickname = res.data.data.nickname
      this.content = res.data.data.content
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
.picurl {
  width: 150px;
  height: 150px;
  margin: 40px auto 20px;
  border: 10px solid rgb(197, 197, 197);
}
.picurl img {
  width: 150px;
  height: 150px;
}
.name {
  text-align: center;
}
.url {
  width: 80%;
  margin: 20px auto;
}
.pl {
  display: flex;
  padding: 0 15px;
}
.avatarurl {
  width: 40px;
  height: 40px;
}
.avatarurl img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.nickname {
  margin-left: 5px;
}
.nickname span {
  font-size: 14px;
}
</style>

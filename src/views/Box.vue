<template>
  <el-container>
    <div class="box">
      <van-notice-bar left-icon="volume-o"
                      speed="40"
                      text="欢迎注册登录，Vip功能限会员用户可用，活动期间注册的用户赠送3天会员！"
                      v-if="isnologin" />
      <van-notice-bar left-icon="volume-o"
                      speed="40"
                      text="欢迎您登录，Vip功能限会员用户可用，每天签到送积分，积分免费兑会员！"
                      v-if="isnovip"
                      v-show="islogin" />
      <van-notice-bar left-icon="volume-o"
                      :scrollable="false"
                      v-if="isvip">
        <van-swipe vertical
                   class="notice-swipe"
                   :autoplay="3000"
                   :show-indicators="false">
          <van-swipe-item>总有一个领域，你比别人更专业</van-swipe-item>
          <van-swipe-item>整理，也是一种创造</van-swipe-item>
          <van-swipe-item>好品味，与世界分享</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <div class="boxs">
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('Picture',false)">
              随机风景图片
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('Music',false)">
              随心听</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('liaotian',false)">智能聊天
              <div class="vipbox">VIP</div>
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('audio',false)">文字转语音</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('erweima',false)">二维码生成</div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('evaluate',true)">网易云热评
              <div class="vipbox">VIP</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('Fy',true)">
              翻译<div class="vipbox">VIP</div>
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('history',false)">
              历史上的今天
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('iphone',false)">
              电话话码查询
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('joke',false)">随机一个笑话</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('Tianqi',true)">
              天气查询
              <div class="vipbox">VIP</div>
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('idiom',false)">成语接龙</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="routertg('baike',true)">
              超级百科
              <div class="vipbox">VIP</div>
            </div>
          </el-col>
          <el-col :span="11"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="routertg('wallpaper',false)">
              待定
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-container>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  data () {
    return {
      isvip: false,
      isnovip: true,
      isnologin: true,
      islogin: false,
      token: null
    }
  },
  async created () {
    this.token = localStorage.getItem('token')
    if (this.token !== null) {
      if (/^[0-9]*$/.test(this.token)) {
        this.isnologin = false
        this.islogin = true
        const res = await this.$http.get('http://mcweb.top/api/gettime.php?qqnumber=' + this.token)
        const { data } = res
        if (Date.parse(new Date()) / 1000 < data) {
          this.isvip = true
          this.isnovip = false
        }
      } else {
        this.token = null
      }
    }
  },
  methods: {
    routertg (hzlj, type) {
      if (type === true && this.isvip === false) {
        Toast('此功能仅会员可用')
      } else {
        this.$router.push(hzlj)
      }
    }
  }
}
</script>
<style>
.box {
  width: 100%;
  box-sizing: border-box;
}
.boxs {
  margin-top: 25px;
}
.el-row {
  margin: 0 !important;
  margin-bottom: 20px !important;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  overflow: hidden;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.vipbox {
  position: absolute;
  top: 3px;
  right: -9px;
  transform: rotate(40deg);
  height: 9px;
  line-height: 10px;
  font-size: 8px;
  width: 35px;
  color: white;
  background-color: red;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>

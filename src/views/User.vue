<template>
  <div>
    <div id="xxbox">
      <img :src='txurl'
           alt="加载失败"
           height="60px">
      <div id="tqbox">
        <h4 v-if="islogin">{{name}}</h4>
        <h3 v-if="islogin2"><a href="javascript:0"
             @click="login">点击此处登录</a></h3>
        <p v-if="islogin">
          <span>QQ:</span>
          <span>{{qqnumber}}</span>
          <van-button class="sign"
                      type="primary"
                      size="mini"
                      @click="gosign">{{sign}}</van-button>
        </p>
      </div>
    </div>
    <div>
      <p class="title">会员信息</p>
      <van-cell-group>
        <van-cell title="到期时间"
                  :value="time"
                  class="dqtime" />
        <van-cell is-link
                  @click="showPopup">购买会员</van-cell>
        <van-popup v-model="show"
                   position="bottom"
                   :style="{ height: '60%' }"
                   round>
          <van-radio-group v-model="radio">
            <p class="title"
               id="zftitle">帐号信息</p>
            <van-cell-group>
              <van-cell title="QQ"
                        :value="qqnumber" />
            </van-cell-group>
            <p class="title">购买会员时长</p>
            <van-cell-group>
              <van-cell title="一星期（7天）--- 3元"
                        clickable
                        @click="radio = '1'">
                <template #right-icon>
                  <van-radio name="1" />
                </template>
              </van-cell>
              <van-cell title="一个月（30天）--- 10元"
                        clickable
                        @click="radio = '2'">
                <template #right-icon>
                  <van-radio name="2" />
                </template>
              </van-cell>
              <van-cell title="一季度（90天）--- 25元"
                        clickable
                        @click="radio = '3'">
                <template #right-icon>
                  <van-radio name="3" />
                </template>
              </van-cell>
              <van-cell title="一年（365天）--- 99元"
                        clickable
                        @click="radio = '4'">
                <template #right-icon>
                  <van-radio name="4" />
                </template>
              </van-cell>
              <van-cell title="至尊终身 --- 298元"
                        clickable
                        @click="radio = '5'">
                <template #right-icon>
                  <van-radio name="5" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-button type="default"
                      class="qxbtn vipbtn"
                      @click="closePopup">取消</van-button>
          <van-button type="info"
                      class="vipbtn"
                      @click="editime">支付</van-button>
        </van-popup>
      </van-cell-group>
      <p class="title">积分信息</p>
      <van-cell-group>
        <van-cell title="积分数量"
                  :value="intenum" />
        <van-cell is-link
                  @click="changevip">兑换会员</van-cell>
        <van-cell is-link
                  @click="development">兑换礼品</van-cell>
        <van-cell is-link
                  @click="intePopup">获取积分</van-cell>
        <van-popup v-model="inte"
                   position="bottom"
                   :style="{ height: '30%' }"
                   round>
          <p class="title"
             id="jftitle">玩游戏赚积分</p>
          <van-cell-group>
            <van-cell is-link>待开发</van-cell>
            <van-cell is-link>待开发</van-cell>
          </van-cell-group>
          <p class="title">看视频赚积分</p>
          <van-cell-group>
            <van-cell is-link>待开发</van-cell>
            <van-cell is-link>待开发</van-cell>
          </van-cell-group>
        </van-popup>
      </van-cell-group>
      <p class="title">系统设置</p>
      <van-cell-group>
        <van-cell is-link
                  @click="exitlogin">退出登录</van-cell>
        <van-cell is-link
                  @click="cancellogin">注销账号</van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Dialog, Cell, CellGroup, Radio, RadioGroup, Popup, Toast } from 'vant'
import 'vant/lib/index.css'
Vue
  .use(Dialog)
  .use(Cell)
  .use(CellGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(Popup)
  .use(Toast)
export default {
  data () {
    return {
      radio: '1',
      show: false,
      inte: false,
      name: '加载中..',
      qqnumber: '',
      txurl: 'http://q1.qlogo.cn/g?b=qq&nk=24612582&s=100',
      islogin: false,
      islogin2: true,
      token: '',
      time: '加载中..',
      intenum: '',
      sign: '签到',
      timeStamp: ''
    }
  },
  created () {
    this.gettoken()
    this.$emit('func2', '')
  },
  methods: {
    showPopup () {
      if (this.token === null) {
        return
      }
      if (this.timeStamp > 4673802906) {
        Toast('您是永久会员，无需继续购买')
        return
      }
      this.show = true
    },
    intePopup () {
      if (this.token === null) {
        return
      }
      this.inte = true
    },
    closePopup () {
      this.show = false
    },
    login () {
      this.$router.push('/login')
    },
    exitlogin () {
      if (this.token === null) {
        return
      }
      Dialog.confirm({
        title: '系统提示',
        message: '确定退出登录吗？'
      })
        .then(() => {
          localStorage.clear()
          this.token = null
          this.gettoken()
        })
        .catch(() => {
          // on cancel
        })
    },
    async gettoken () {
      this.token = await localStorage.getItem('token')
      if (this.token === null) {
        this.islogin = false
        this.islogin2 = true
        this.time = ''
      } else {
        if (/^[0-9]*$/.test(this.token)) {
          this.islogin = true
          this.islogin2 = false
          this.qqnumber = this.token
          this.txurl = 'http://q1.qlogo.cn/g?b=qq&nk=' + this.token + '&s=100'
          const res = await this.$http.get('https://api.dzzv.cn/api/qqname?qq=' + this.token)
          const data = res.data.name
          if (data !== '') {
            this.name = data
          }
          const res2 = await this.$http.get('http://mcweb.top/api/gettime.php?qqnumber=' + this.token)
          const data2 = res2.data
          this.timeStamp = data2
          this.time = this.timetotime(data2)
          const res4 = await this.$http.get('http://mcweb.top/api/getinte.php?qqnumber=' + this.token)
          const data4 = res4.data
          this.intenum = data4
          const res3 = await this.$http.get('http://mcweb.top/api/getsign.php?qqnumber=' + this.token)
          const data3 = res3.data
          if (data3 === 0) {
            this.sign = '签到'
          } else if (data3 === 1) {
            this.sign = '已签到'
          } else {
            this.sign = '签到故障系统'
          }
        } else {
          this.token = null
        }
      }
    },
    timetotime (obj) {
      if (Date.parse(new Date()) / 1000 < obj) {
        if (obj > 4673802906) {
          return '永久会员'
        } else {
          var date = new Date(obj * 1000)
          var y = 1900 + date.getYear()
          var m = '0' + (date.getMonth() + 1)
          var d = '0' + date.getDate()
          return '于' + y + '年' + m.substring(m.length - 2, m.length) + '月' + d.substring(d.length - 2, d.length) + '日到期'
        }
      } else {
        return '已过期'
      }
    },
    async gosign () {
      if (this.sign === '签到') {
        const res2 = await this.$http.get('http://mcweb.top/api/edisign.php?qqnumber=' + this.token)
        const data2 = res2.data
        const inte = this.intenum + 5
        const res3 = await this.$http.get('http://mcweb.top/api/ediinte.php?qqnumber=' + this.token + '&inte=' + inte)
        const data3 = res3.data
        if (data2 === 1 && data3 === 1) {
          Toast('签到成功,已增加5积分！')
          this.sign = '已签到'
          this.intenum = this.intenum + 5
        } else {
          Toast('签到系统故障，待管理员维护！')
        }
      } else if (this.sign === '已签到') {
        Toast('今日已签到，请明天再次签到！')
      } else {
        Toast('签到系统故障，待管理员维护！')
      }
    },
    editime () {
      if (this.radio === '1') {
        this.buytime(7)
      } else if (this.radio === '2') {
        this.buytime(30)
      } else if (this.radio === '3') {
        this.buytime(90)
      } else if (this.radio === '4') {
        this.buytime(365)
      } else if (this.radio === '5') {
        this.buytime(99999)
      }
    },
    async buytime (day) {
      this.timeStamp = this.timeStamp + 24 * 60 * 60 * day
      const res = await this.$http.get('http://mcweb.top/api/editime.php?qqnumber=' + this.token + '&viptime=' + this.timeStamp)
      const data = res.data
      if (data === 1) {
        this.time = this.timetotime(this.timeStamp)
        this.closePopup()
        Toast('购买成功')
      } else {
        Toast('购买失败')
      }
    },
    cancellogin () {
      if (this.token === null) {
        return
      }
      Dialog.confirm({
        title: '系统提示',
        message: '确定永久注销帐号吗？'
      })
        .then(() => {
          this.cancel()
        })
        .catch(() => {
          // on cancel
        })
    },
    async cancel () {
      const res = await this.$http.get('http://mcweb.top/api/cancel.php?qqnumber=' + this.token)
      const data = res.data
      if (data === 1) {
        localStorage.clear()
        this.token = null
        this.gettoken()
        Toast('注销成功')
      } else {
        Toast('注销失败')
      }
    },
    changevip () {
      if (this.token === null) {
        return
      }
      if (this.timeStamp > 4673802906) {
        Toast('您是永久会员，无法继续兑换会员')
        return
      }
      if (Math.floor(this.intenum / 30) < 1) {
        return Toast('当前积分不足以兑换会员！')
      }
      Dialog.confirm({
        title: '会员兑换',
        message: '当前积分为' + this.intenum + '分，可兑换会员' + Math.floor(this.intenum / 30) + '天，确定现在兑换吗？'
      })
        .then(() => {
          this.gocgvip()
        })
        .catch(() => {
          // on cancel
        })
    },
    async gocgvip () {
      const res = await this.$http.get('http://mcweb.top/api/ediinte.php?qqnumber=' + this.token + '&inte=' + this.intenum % 30)
      const data = res.data
      this.timeStamp = this.timeStamp + 24 * 60 * 60 * Math.floor(this.intenum / 30)
      const res2 = await this.$http.get('http://mcweb.top/api/editime.php?qqnumber=' + this.token + '&viptime=' + this.timeStamp)
      const data2 = res2.data
      if (data === 1 && data2 === 1) {
        this.time = this.timetotime(this.timeStamp)
        this.intenum = this.intenum % 30
        Toast('兑换成功，剩余' + this.intenum % 30 + '积分')
      } else {
        Toast('注销失败')
      }
    },
    development () {
      Toast('此功能开发中！')
    }
  }
}
</script>
<style>
#xxbox {
  padding: 18px;
  display: flex;
  margin-top: 20px;
}
#xxbox img {
  width: 60px !important;
  border-radius: 10px;
  font-size: 8px;
}
#tqbox {
  margin-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#tqbox h3 {
  margin-left: 50px;
}
.title {
  padding: 0 16px;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
  color: rgb(168, 168, 168);
  background-color: rgb(241, 236, 236);
}
#zftitle,
#jftitle {
  padding-top: 15px;
}
.vipbtn {
  border: 1px solid rgb(207, 207, 207) !important;
  margin: 10px !important;
  box-sizing: border-box !important;
  text-align: center !important;
}
.qxbtn {
  margin-left: 215px !important;
}
.dqtime div:nth-of-type(2) {
  color: red;
}
.sign {
  float: right;
}
</style>

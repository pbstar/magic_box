<template>
  <div class="login">
    <!-- <header>
      <div class="fh"
           @click="fanhui">
        <i class="el-icon-arrow-left"></i>
        <div>返回</div>
      </div>
    </header> -->
    <img class="logo"
         src="./imgs/mlogo.png"
         alt="" />
    <!-- 根据 type 属性决定显示登录还是注册界面 -->
    <!-- 登录 -->
    <div v-if="type == 'login'"
         class="login-body login">
      <van-form @submit="onSubmit">
        <van-field v-model="username"
                   name="username"
                   label="帐号"
                   placeholder="请输入QQ号码"
                   :rules="[{ required: true, message: '请填写帐号' },{ pattern, message: '请输入5-10位数字QQ号' }]" />
        <van-field v-model="password"
                   type="password"
                   name="password"
                   label="密码"
                   placeholder="请输入密码"
                   :rules="[{ required: true, message: '请填写密码' },{ validator  , message:'请输入6-10位字母和数字组成的密码'}]" />
        <Verify @success="success"
                @error="error"
                ref="verify"
                class="verify-box"
                :type="1"
                :showButton="false"
                fontSize="16px"
                height="38px"
                width="120px"></Verify>
        <div style="margin: 16px">
          <div class="link-register"
               @click="toggle('register')">立即注册</div>
          <van-button round
                      block
                      type="info"
                      color="#1baeae"
                      native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div v-else
         class="login-body register">
      <van-form @submit="onSubmit">
        <van-field v-model="username1"
                   name="username1"
                   label="帐号"
                   placeholder="请输入QQ号"
                   :rules="[{ required: true, message: '请填写帐号' },{ pattern, message: '请输入5-10位数字QQ号' }]" />
        <van-field v-model="password1"
                   type="password"
                   name="password1"
                   label="密码"
                   placeholder="请输入密码"
                   :rules="[{ required: true, message: '请填写密码' },{ validator  , message:'请输入6-10位字母和数字组成的密码'}]" />
        <van-field v-model="password2"
                   type="password"
                   name="password2"
                   label="确认密码"
                   placeholder="请再次输入密码"
                   :rules="[
                   { required: true, message: '请填写密码' },
                   { validator, message:'请输入6-10位字母和数字组成的密码'},
                   { validator:validator2, message: '请确保两次密码一致' }]" />
        <Verify @success="success"
                @error="error"
                ref="verify"
                class="verify-box"
                :type="1"
                :showButton="false"
                fontSize="16px"
                height="38px"
                width="120px"></Verify>
        <div style="margin: 16px">
          <div class="link-register"
               @click="toggle('login')">已有账号,去登陆</div>
          <van-button round
                      block
                      type="info"
                      color="#1baeae"
                      native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import Verify from 'vue2-verify'
import Vue from 'vue'
import { Button, Form, Field, Toast } from 'vant'
Vue
  .use(Button)
  .use(Form)
  .use(Field)
  .use(Toast)
export default {
  data () {
    return {
      username: '', // 账号
      password: '', // 密码
      username1: '',
      password1: '',
      password2: '',
      type: 'login',
      width: '100%',
      fontSize: '20px',
      verify: false,
      pattern: /^[1-9][0-9]{4,9}$/
    }
  },
  methods: {
    validator (val) {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,9}$/.test(val)
    },
    validator2 (val) {
      if (val === this.password1) {
        return true
      } else {
        return false
      }
    },
    // 提交按钮触发
    async onSubmit () {
      /**
       * 1、对验证码进行验证
       *  正确：继续请求登录接口
       *  错误：停止程序运行
       */
      this.$refs.verify.$refs.instance.checkCode()
      if (this.verify === false) {
        Toast('验证码错误')
        return
      }
      if (this.type === 'login') {
        const res = await this.$http.get('http://mcweb.top/api/login.php?qqnumber=' + this.username + '&password=' + this.password)
        const { data } = res
        if (data !== 1) return Toast('账号或密码错误')
        localStorage.setItem('token', this.username)
        this.$router.push('user')
      } else if (this.type === 'register') {
        const res = await this.$http.get('http://mcweb.top/api/register.php?qqnumber=' + this.username1 + '&password=' + this.password1)
        const { data } = res
        if (data === 1) {
          this.username = this.username1
          this.password = this.password1
          this.type = 'login'
          Toast('注册成功')
        } else if (data === 2) {
          Toast('该QQ已被注册')
        } else {
          Toast('注册失败')
        }
      }
      // 判断验证是否成功
    },
    // 切换登录和注册模板
    toggle (type) {
      this.type = type
    },
    success () {
      this.verify = true
    },
    error () {
      this.verify = false
    }
    // fanhui () {
    //   this.$router.push('/user')
    // }
  },
  components: {
    Verify
  }

}
</script>
<style lang="less" scoped>
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 0px;
    margin-bottom: 30px;
    border-radius: 50%;
  }
  .login-body {
    padding: 0 20px;
  }
  .link-register {
    margin-bottom: 20px;
    color: #1989fa;
    display: inline-block;
  }
  .link-login {
    font-size: 12px;
    margin-bottom: 20px;
    color: #1989fa;
    display: inline-block;
  }
  .verify-box {
    margin-top: 15px;
  }
  /deep/ .cerify-code-panel {
    display: flex;
    flex-direction: row;
  }
  /deep/ .verify-code {
    margin-right: 20px;
    box-sizing: border-box;
  }
  /deep/.verify-code-area {
    width: 200px !important;
  }
  /deep/ .verify-input-area {
    height: 45px;
    width: 100px;
    margin-right: 5px;
    input {
      border: none;
      border-bottom: 1px solid #ebedf0;
    }
    .varify-input-code {
      height: 90%;
    }
  }
}
</style>

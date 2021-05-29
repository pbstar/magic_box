<template>
  <el-container>
    <div style="margin-top: 50px; width:100%">
      <div class="logobox">
        <h2>全能搜索</h2>
        <span class="">世间万物一键直达</span>
      </div>
      <el-input placeholder="请输入内容"
                @input="getssts"
                @focus="getFocusFooter"
                @blur="getFocusFooter2"
                v-model="input"
                name="partNoName"
                class="input-with-select">
        <el-select v-model="select"
                   slot="prepend"
                   placeholder="百度">
          <el-option label="百度"
                     value="https://www.baidu.com/s?wd="></el-option>
          <el-option label="搜狗"
                     value="https://www.sogou.com/web?query="></el-option>
          <el-option label="视频"
                     value="https://app.movie/index.php/vod/search.html?wd="></el-option>
          <el-option label="开发"
                     value="https://kaifa.baidu.com/searchPage?wd="></el-option>
        </el-select>
        <el-button slot="append"
                   icon="el-icon-search"
                   @click="sousuo()"></el-button>
      </el-input>
      <ul id="ssts"
          v-if="ists">
      </ul>
      <div class="dh">
        <el-row :gutter="20">
          <el-col :span="6"
                  :offset="9">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://www.csdn.net/','CSDN')">CSDN</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"
                  :offset="6">
            <div class="grid-content bg-purple"
                 @click="dhtz('http://www.yyyweb.com/','前端里')">前端里</div>
          </el-col>
          <el-col :span="5"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://juejin.cn/','掘金')">掘金</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5"
                  :offset="3">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://weui.io/','WeUI')">WeUI</div>
          </el-col>
          <el-col :span="6"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://nodejs.org/zh-cn/docs/','Nodejs')">Nodejs</div>
          </el-col>
          <el-col :span="5"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://youzan.github.io/vant/mobile.html#/zh-CN/','Vant')">Vant</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10"
                  :offset="0">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://www.staticfile.org/','Staticfile CDN')">Staticfile CDN</div>
          </el-col>
          <el-col :span="7"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('http://dqtc.gitee.io/front-end/#/','老姚笔记')">老姚笔记</div>
          </el-col>
          <el-col :span="5"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://www.openzui.com/','ZUI')">ZUI</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"
                  :offset="2">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://cli.vuejs.org/zh/guide/','Vue Cli')">Vue Cli</div>
          </el-col>
          <el-col :span="6"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('http://mint-ui.github.io/#!/zh-cn','Mint UI')">Mint UI</div>
          </el-col>
          <el-col :span="6"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://uniapp.dcloud.io/','uniapp')">uniapp</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5"
                  :offset="2">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://es6.ruanyifeng.com/#docs/let','ES6')">ES6</div>
          </el-col>
          <el-col :span="6"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('http://www.change.tm/index/index','启嘉网')">启嘉网</div>
          </el-col>
          <el-col :span="7"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://www.runoob.com/','菜鸟教程')">菜鸟教程</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"
                  :offset="2">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://element.eleme.cn/#/zh-CN','Element UI')">Element UI</div>
          </el-col>
          <el-col :span="5"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('http://lesscss.cn/','Less')">Less</div>
          </el-col>
          <el-col :span="5"
                  :offset="1">
            <div class="grid-content bg-purple"
                 @click="dhtz('https://cn.vuejs.org/v2/guide/','Vue')">Vue</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-container>
</template>
<style>
.el-select {
  width: 80px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select {
  width: 90% !important;
  margin: 0 5%;
}
.el-icon-search {
  font-size: 18px;
}
.el-input-group__append {
  padding-left: 8px !important;
  padding-right: 10px !important;
}
.el-input-group__append button {
  padding: 12px 16px !important;
  width: 60px;
}
.el-select {
  width: 55px;
}
.el-input__suffix {
  width: 18px;
  left: 30px !important;
}
.el-input__inner {
  box-sizing: border-box !important;
  height: 40.2px !important;
  padding-left: 6px !important;
  padding-right: 6px !important;
}
.el-input {
  width: 90%;
}
.logobox {
  text-align: center;
  line-height: 20px;
  margin: 20px auto;
  font-size: 22px;
  color: rgb(90, 88, 88);
}
.logobox span {
  font-size: 8px;
  display: inline-block;
  line-height: 10px !important;
}
#ssts {
  width: 90%;
  position: absolute;
  top: 175px;
  left: 5%;
  right: 5%;
  color: #999999;
  background-color: #f5f7fa;
  border: 1px solid rgb(226, 223, 223);
  border-radius: 5px;
  padding: 5px;
  z-index: 20;
  box-sizing: border-box;
}
#ssts li {
  height: 28px;
  line-height: 28px;
  border-bottom: 1px solid rgb(236, 236, 236);
}
#ssts a {
  width: 100%;
  justify-content: flex-start !important;
  align-items: flex-start;
}
</style>
<script src="https://cdn.staticfile.org/jquery/3.0.0/jquery.js"></script>
<script>
import $ from 'jquery'
import Vue from 'vue'
import {
  Form,
  FormItem,
  Input,
  Button,
} from 'element-ui'
Vue.use(Form,
  FormItem,
  Input, Button);
export default {
  data () {
    return {
      input1: 'https://www.baidu.com/s?wd=',
      input2: '',
      input3: '',
      input4: '',
      input: '',
      select: this.input1,
      ists: false,
      ssts: []
    }
  },
  created () {
    this.select = this.input1
    this.$emit('func', true)
  },
  methods: {
    async getssts () {
      this.ists = true
      if (this.input == '') {
        this.ists = false
      } else {
        await $.ajax({
          url: 'https://suggestion.baidu.com/su?wd=' + this.input,
          dataType: 'jsonp',
          jsonp: 'cb',
          success: function (data) {
            if (data.s == '') {
              this.ists = false
            }
            $('#ssts').children("li").remove();
            $.each(data.s, function () {
              $('#ssts').append(`<li>${this}</li>`);
            })
          }
        })
      }
    },
    sousuo () {
      if (this.select == 'https://www.baidu.com/s?wd=') {
        this.$router.push('/Sbox?url=' + this.select + this.input + '&title=百度搜索')
      } else if (this.select == 'https://www.sogou.com/web?query=') {
        this.$router.push('/Sbox?url=' + this.select + this.input + '&title=搜狗搜索')
      } else if (this.select == 'https://app.movie/index.php/vod/search.html?wd=') {
        this.$router.push('/Sbox?url=' + this.select + this.input + '&title=视频搜索')
      } else if (this.select == 'https://kaifa.baidu.com/searchPage?wd=') {
        this.$router.push('/Sbox?url=' + this.select + this.input + '&title=开发者搜索')
      }
    },
    getFocusFooter () {
      this.$emit('func', false)

    },
    getFocusFooter2 () {
      this.$emit('func', true)
    },
    dhtz (url, title) {
      this.$router.push('/Sbox?url=' + url + '&title=' + title)
    }
  }
}
$("body").click(function (e) {
  if (!$(e.target).closest("input,#ssts").length) {
    $("#ssts").hide();
  }
});
$(document).on('click', '#ssts li', function () {
  var word = $(this).text();
  $('.el-input-group--append>input').val(word)
  $("input[name='partNoName']")[0].dispatchEvent(new Event('input'))
})
</script>
<style>
.dh {
  margin: 30px 5%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  color: rgb(107, 97, 97);
}
.bg-purple-dark {
  background: #ced6df;
}
.bg-purple {
  background: #e2e5eb;
}
.bg-purple-light {
  background: #edeef3;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

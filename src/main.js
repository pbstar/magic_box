import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 axios
import axios from 'axios'
// 导入全局样式文件
import './common/style/common.css'
/**
 * 按需引入 elementui 组件库
 */
import {
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox,
  Container,
  Select,
  Option,
  Col,
  Row, Header,
  Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup,
  Table, TableColumn, Switch, Tag, Breadcrumb, BreadcrumbItem, Card, Link, Tree
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  NavBar, Icon, NoticeBar, Swipe, SwipeItem
} from 'vant'
Vue
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Container)
  .use(Select)
  .use(Option)
  .use(Col)
  .use(Row)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Table)
  .use(TableColumn)
  .use(Switch)
  .use(Tag)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Card)
  .use(Link)
  .use(Tree)
  .use(NavBar)
  .use(Icon)
  .use(NoticeBar)
  .use(Swipe)
  .use(SwipeItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

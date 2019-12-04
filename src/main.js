// 入口文件
import Vue from  'vue'
//导入APP
import app from  './App.vue'
//导入Mint-ui组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
//注册
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入MUI的样式
import './lib/mui/css/mui.min.css'
//导入样式
import  './lib/mui/css/icons-extra.css'
//导入路由模块
import VueRouter from "vue-router";
//使用路由
Vue.use(VueRouter)
//导入自己的路由模块
import router  from "./router.js";
//导入vue-resources
import VueResources from 'vue-resource'
//使用
Vue.use(VueResources)


var  vm =new Vue({
    el:'#app',
    render: c => c(app),
    router
})
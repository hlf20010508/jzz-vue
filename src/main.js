import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import App from './App.vue';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAMap from "vue-amap";

if (process.env.NODE_ENV == 'development') { require('./mock'); }

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: 'f924a9bff84ff5e1cdd9638daa25c1b3',
  plugin: [
    "AMap.Autocomplete",// 输入提示插件
    "AMap.PlaceSearch",// POI搜索插件
    "AMap.Scale",// 右下角缩略图插件 比例尺
    "AMap.OverView",// 地图鹰眼插件
    "AMap.ToolBar",// 地图工具条
    "AMap.MapType",// 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor",// 编辑 折线多，边形
    "AMap.CircleEditor",// 圆形编辑器插件
    "AMap.Geolocation", // 定位控件，用来获取和展示用户主机所在的经纬度位置
    "AMap.Geocoder",// 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
    "AMap.AMapUI",// UI组件
  ],
  v: "1.4.4",
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
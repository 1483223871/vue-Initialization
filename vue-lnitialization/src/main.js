import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./public/time"
Vue.config.productionTip = false
function urlredirect () {
  var sUserAgent = navigator.userAgent.toLowerCase()
  if (
    sUserAgent.match(
      /(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i
    )
  ) {
    // PC跳转移动端
    // window.location.href =
  } else {
    // 移动端 跳转到pc端
    // window.location.href =
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

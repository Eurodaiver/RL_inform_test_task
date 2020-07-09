import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

global.IP ="";//"https://localhost:44333";

//настройка аутентификации для всех запросов this.$http
Vue.prototype.$http = Axios;
const token = sessionStorage.getItem("accessKey");
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + token
}

Vue.config.productionTip = false;
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

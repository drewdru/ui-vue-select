import Vue from 'vue';
import Vuex from 'vuex';
import VuiSelect from '@/vui-select';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VuiSelect);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  vuiSelectSettings: new VuiSelect(),
  render: createElement => createElement(App)
});

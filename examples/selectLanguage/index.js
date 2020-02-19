import Vue from 'vue';
import Vuex from 'vuex';
import UiVueSelect from '@/ui-vue-select';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(UiVueSelect);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  uiVueSelectSettings: new UiVueSelect(),
  render: createElement => createElement(App)
});

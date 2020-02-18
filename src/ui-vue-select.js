import { devMode, registerVuexStore } from './utils';

// Import your additional components here
import UiVueSelectComponent from './ui-vue-select-component.vue';

export default class UiVueSelect {
  // HERE IS YOUR PLACE TO DEVELOP YOUR COMPONENT

  constructor(options = {}) {
    const defaults = {
      // This is your plugin's options. It will be accessible with this.options
      accessorName: '$uiVueSelect'
    };
    this.options = { ...defaults, ...options };
  }

  // Some instance methods that you can access from this.$uiVueSelect
  world() {
    return 'world';
  }

  static register = (Vue, options, store) => {
    console.log('Here is the options of the component', options);
    console.log('Here is the store of the app', store);
    // You can use `this.options` property to access options.

    // Delete this line if your plug-in doesn't provide any components
    Vue.component('UiVueSelect', UiVueSelectComponent);

    // Vue.directive('your-custom-directive', customDirective);

    // registerVuexStore(store, 'counterStore', {
    //   namespaced: true,
    //   state: { counter: 0 },
    //   getters: {
    //     counter: state => state.counter
    //   },
    //   actions: {
    //     increment: ({ commit }) => commit('increment')
    //   },
    //   mutations: {
    //     increment: state => state.counter++
    //   }
    // });
  };

  // Some lifecycle hooks to add on mixin
  static mixin = () => ({
    mounted() {
      console.log('Hey! I am running on every mount, please remove me!');
      console.log(this.$store);
    }
  });

  ////////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  ////////////////////////////////////

  initialized = false;

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[ui-vue-select] not installed. Make sure to call \`Vue.use(UiVueSelect)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    UiVueSelect.register(Vue, this.options, store);
    this.initialized = true;
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[ui-vue-select] already installed. Vue.use(UiVueSelect) should be called only once.'
      );
    }
    return;
  }

  Vue.mixin({
    /**
     * UiVueSelect init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { uiVueSelectSettings, store, parent } = this.$options;

      let instance = null;
      if (uiVueSelectSettings) {
        instance =
          typeof uiVueSelectSettings === 'function'
            ? new uiVueSelectSettings()
            : new UiVueSelect(uiVueSelectSettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$UiVueSelectInstance) {
        instance = parent.__$UiVueSelectInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$UiVueSelectInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...UiVueSelect.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[ui-vue-select] is plugged in.');
  }
}

UiVueSelect.install = install;

import { devMode, registerVuexStore } from './utils';

// Import your additional components here
import VuiSelectComponent from './vui-select-component.vue';

export default class VuiSelect {
  // HERE IS YOUR PLACE TO DEVELOP YOUR COMPONENT

  constructor(options = {}) {
    const defaults = {
      // This is your plugin's options. It will be accessible with this.options
      accessorName: '$vuiSelect'
    };
    this.options = { ...defaults, ...options };
  }

  // Some instance methods that you can access from this.$vuiSelect
  world() {
    return 'world';
  }

  static register = (Vue, options, store) => {
    console.log('Here is the options of the component', options);
    console.log('Here is the store of the app', store);
    // You can use `this.options` property to access options.

    // Delete this line if your plug-in doesn't provide any components
    Vue.component('VuiSelect', VuiSelectComponent);

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
        `[vui-select] not installed. Make sure to call \`Vue.use(VuiSelect)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    VuiSelect.register(Vue, this.options, store);
    this.initialized = true;
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[vui-select] already installed. Vue.use(VuiSelect) should be called only once.'
      );
    }
    return;
  }

  Vue.mixin({
    /**
     * VuiSelect init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { vuiSelectSettings, store, parent } = this.$options;

      let instance = null;
      if (vuiSelectSettings) {
        instance =
          typeof vuiSelectSettings === 'function'
            ? new vuiSelectSettings()
            : new VuiSelect(vuiSelectSettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$VuiSelectInstance) {
        instance = parent.__$VuiSelectInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$VuiSelectInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...VuiSelect.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[vui-select] is plugged in.');
  }
}

VuiSelect.install = install;

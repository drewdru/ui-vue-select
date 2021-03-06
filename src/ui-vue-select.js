import { devMode } from './utils';

import UiVueSelectComponent from './ui-vue-select-component.vue';

export default class UiVueSelect {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$uiVueSelect'
    };
    this.options = { ...defaults, ...options };
  }

  static register = (Vue, options, store) => {
    Vue.component('UiVueSelect', UiVueSelectComponent);
  };

  static mixin = () => ({});

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
      const { uiVueSelect, store, parent } = this.$options;

      let instance = null;
      if (uiVueSelect) {
        instance =
          typeof uiVueSelect === 'function' ? new uiVueSelect() : new UiVueSelect(uiVueSelect);
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

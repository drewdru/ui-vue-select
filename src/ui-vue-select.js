import { devMode } from './utils';

import UiVueSelectComponent from './ui-vue-select-component.vue';

export default class UiVueSelect {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$uiVueSelect'
    };
    this.options = { ...defaults, ...options };
  }

  world() {
    return 'world';
  }

  static register = (Vue, options) => {
    Vue.component('UiVueSelect', UiVueSelectComponent);
  };

  static mixin = () => ({});

  initialized = false;

  init(Vue) {
    if (devMode() && !install.installed) {
      console.warn(
        `[ui-vue-select] not installed. Make sure to call \`Vue.use(UiVueSelect)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    UiVueSelect.register(Vue, this.options);
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
    ...UiVueSelect.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[ui-vue-select] is plugged in.');
  }
}

UiVueSelect.install = install;

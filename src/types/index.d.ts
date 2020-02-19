import Vue, { PluginFunction } from 'vue';
import { Store } from 'vuex';

export class UiVueSelect {
  constructor(options?: UiVueSelectOptions);

  static install(): PluginFunction<any>;
  static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;
}

export interface UiVueSelectOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $uiVueSelect: UiVueSelect;
    __$UiVueSelectInstance: UiVueSelect;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    uiVueSelect?: UiVueSelectOptions | UiVueSelect
  }
}

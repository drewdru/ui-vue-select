import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class VuiSelect {
  constructor(options?: VuiSelectOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface VuiSelectOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $vuiSelect: VuiSelect;
    __$VuiSelectInstance: VuiSelect;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vuiSelectSettings?: VuiSelectOptions | VuiSelect
  }
}

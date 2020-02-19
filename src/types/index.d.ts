import Vue, { PluginFunction } from 'vue';

export class UiVueSelect {
  constructor(options?: UiVueSelectOptions);

  static install(): PluginFunction<any>;
  static init(Vue: Vue): void;

  // Your instance methods
  world(): string;
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
    uiVueSelectSettings?: UiVueSelectOptions | UiVueSelect
  }
}

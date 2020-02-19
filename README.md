# UiVueSelect

Custom select for Vue.js

## Installation

### 1. Install
```
yarn add ui-vue-select
# or
npm i ui-vue-select --save
```

### 2. Plug-in
```js
import UiVueSelect from 'ui-vue-select'

Vue.use(UiVueSelect)

new Vue({
  // your vue config
  UiVueSelect: UiVueSelect,
})
```

### 3. Use in your components

```vue
<template>
  <ui-vue-select :items="languages" :searchKeys="['title']">
    <template #ui-vue-select-match="props">
      <flag :iso="props.selected.flag"></flag>
      <span>&nbsp;{{props.selected.title}}</span>
    </template>
    <template #ui-vue-select-options="props">
      <flag :iso="props.item.flag"></flag>
      <span>&nbsp;{{props.item.title}}</span>
    </template>
  </ui-vue-select>
</template>

<script>
  export default {
    async data() {
      return {
        languages: [
          {locale: 'en', flag: 'us', title: 'English'},
          {locale: 'ru', flag: 'ru', title: 'Russian'},
        ],
      }
    }
    async created() {
      console.log(this.$uiVueSelect);
    },
  };
</script>
```

## License
MIT
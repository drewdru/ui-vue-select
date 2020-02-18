# VuiSelect

Your plugin description...

## Installation

### 1. Install
```
yarn add vui-select
# or
npm i vui-select --save
```

### 2. Plug-in
```js
import VuiSelect from 'vui-select'

Vue.use(VuiSelect)

new Vue({
  // your vue config
  vuiSelectSettings: new VuiSelect(),
})
```

### 3. Use in your components

```vue
<template>
  <vui-select :items="languages" :searchKeys="['title']">
    <template #vui-select-match="props">
      <flag :iso="props.selected.flag"></flag>
      <span>&nbsp;{{props.selected.title}}</span>
    </template>
    <template #vui-select-options="props">
      <flag :iso="props.item.flag"></flag>
      <span>&nbsp;{{props.item.title}}</span>
    </template>
  </vui-select>
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
      console.log(this.$vuiSelect);
    },
  };
</script>
```

## License
MIT
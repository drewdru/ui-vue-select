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
  uiVueSelect: UiVueSelect,
})
```

### 3. Use in your components

```vue
<template>
  <ui-vue-select v-model="language" :items="languages" :searchKeys="['title']">
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
        language: {locale: 'en', flag: 'us', title: 'English'},
      }
    }
    async created() {
      console.log(this.$uiVueSelect);
    },
  };
</script>
```
### 4. Change ui-vue-select-match-open

Search will work with this example:
```vue
    <template #ui-vue-select-match-open="props">
      <span>{{props.selected.flag}}</span>
      <span>&nbsp;{{props.selected.title}}</span>
      <input
        class="ui-vue-select-search"
        v-model="props.searchText"
        ref="selectSearch"
        @input="props.onSearch($event)"
      >
    </template>
```

### 5. Multiple select

```vue
<template>
  <ui-vue-select
    v-model="selectedLanguages"
    :id="`selectedLanguages`"
    :name="`selectedLanguages`"
    :items="languages"
    :searchKeys="['title']"
    :required="false"
    :multiple="true"
    :limit="2"
  >
    <template #ui-vue-select-match="props">
      <span v-for="(item, i) of props.selected" :key="`item-${i}`">
        <span>{{item.flag}}</span>
        <span>&nbsp;{{item.title}}&nbsp;</span>
      </span>
    </template>          

    <template #ui-vue-select-options="props">
      <!-- <flag :iso="props.item.flag"></flag> -->
      <span>{{props.item.flag}}</span>
      <span>&nbsp;{{props.item.title}}</span>
    </template>
  </ui-vue-select>
</template>
<script>
export default {
  data() {
    return {
      languages: [
        {locale: 'en', flag: 'us', title: 'English'},
        {locale: 'ru', flag: 'ru', title: 'Russian'},
        {locale: 'fr', flag: 'fr', title: 'French'},
        {locale: 'sp', flag: 'sp', title: 'Spanish'},
      ],
      selectedLanguages: [{locale: 'en', flag: 'us', title: 'English'}],
    };
  }
};
</script>

```


## License
MIT
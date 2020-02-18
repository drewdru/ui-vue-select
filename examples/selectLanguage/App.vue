<template>
  <div>
    Hello {{ msg }}!
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {locale: 'en', flag: 'us', title: 'English'},
        {locale: 'ru', flag: 'ru', title: 'Russian'},
      ],
      msg: 'world'
    };
  }
};
</script>

<style>
</style>

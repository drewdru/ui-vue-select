<template>
  <div class="ui-vue-select">
    <select v-model="selected" class="hidden">
      <option v-for="(item, i) in items"
              :key="`item-${i}`"
              :value="item">
      </option>
    </select>
    <div v-show="!isOpened" class="ui-vue-select-container"
        @click="openSelect()"
    >
      <slot name="ui-vue-select-match" :selected="selected">&nbsp;</slot>
    </div>
    <input v-model="searchText"
          v-show="isOpened"
          class="ui-vue-select-search"
          ref="selectSearch"
          @input="onSearch($event)"
    >
    <div class="ui-vue-select-options" v-show="isOpened">
      <div v-for="(item, i) in searchItems"
          :key="`item-${i}`"
          :value="item"
          @click="selectItem(item)"
          class="ui-vue-select-option"
      >
        <slot :name="`ui-vue-select-options`"  :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script async lang="js" src="./ui-vue-select-component.js"></script>
<style scoped lang="less" src="./ui-vue-select-component.less"></style>

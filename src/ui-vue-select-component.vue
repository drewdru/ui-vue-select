<template>
  <div class="ui-vue-select">
    <div v-show="!isOpened" class="ui-vue-select-container"
        @click="openSelect()"
    >
      <slot v-if="!multiple" name="ui-vue-select-match" :selected="selected">{{selected}}</slot>
      <slot v-if="multiple" name="ui-vue-select-match" :selected="selected">
        <span v-if="selected.size == 0">
          &nbsp;
        </span>
        <span v-for="(item, i) of selected" :key="`item-${i}`">
          {{item}}
        </span>
      </slot>
      <slot name="ui-vue-select-match-arrow">
        <i class="arrow" :class="{ down: !isOpened, up: isOpened }"></i>
      </slot>
    </div>
    <div v-show="isOpened">
      <slot name="ui-vue-select-match-open" :selected="selected" :onSearch="onSearch" :searchText="searchText">
        <input
          v-model="searchText"
          class="ui-vue-select-search"
          ref="selectSearch"
          @input="onSearch($event)"
        >
      </slot>
      <slot name="ui-vue-select-match-arrow">
        <i class="arrow" :class="{ down: !isOpened, up: isOpened }"></i>
      </slot>
    </div>
    <div class="ui-vue-select-options" v-show="isOpened">
      <!-- TODO: <div @click="clearSelected()"> -->
      <div v-for="(item, i) in searchItems"
          :key="`item-${i}`"
          :value="item"
          @click="selectItem(item)"
          class="ui-vue-select-option"
          :class="{ active: checkActive(item) }"
      >
        <slot :name="`ui-vue-select-options`" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script async lang="js" src="./ui-vue-select-component.js"></script>
<style scoped lang="less" src="./ui-vue-select-component.less"></style>

<template>
  <div class="ui-vue-select">
    <div v-show="!isOpened || !isSearch"
        class="ui-vue-select-container"
        :class="{ open: isOpened }"
        @click="openSelect()"
    >
      <div class="ui-vue-select-match-selected">
        <slot v-if="!multiple" name="ui-vue-select-match" :selected="selected">
            {{selected}}
        </slot>
        <slot v-if="multiple" name="ui-vue-select-match" :selected="selected">
            <span v-if="selected.size == 0">
              &nbsp;
            </span>
            <span v-for="(item, i) of selected" :key="`item-${i}`">
              {{item}}
            </span>
        </slot>
      </div>
      <slot name="ui-vue-select-match-arrow">
        <div class="ui-vue-select-match-arrow">
          <i class="arrow" :class="{ down: !isOpened, up: isOpened }"></i>
        </div>
      </slot>
    </div>
    <div v-show="isOpened && isSearch" class="ui-vue-select-match-open">
      <slot name="ui-vue-select-match-open" :selected="selected" :onSearch="onSearch" :searchText="searchText">
        <input
          v-model="searchText"
          class="ui-vue-select-search"
          ref="selectSearch"
          @input="onSearch($event)"
        >
      </slot>
      <slot name="ui-vue-select-match-arrow">
        <div class="ui-vue-select-match-arrow" @click="isOpened=false">
          <i class="arrow" :class="{ down: !isOpened, up: isOpened }"></i>
        </div>
      </slot>
    </div>
    <div class="ui-vue-select-options" v-show="isOpened" @mouseleave="isOpened=false">
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

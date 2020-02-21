<template>
        
  <div class="layout">
    <div class="form">
      <div class="form-group">
        <ui-vue-select
          v-model="language"
          :id="`language`"
          :name="`language`"
          :items="languages"
          :searchKeys="['title']"
          :required="false"
        >
          <template #ui-vue-select-match="props">
            <!-- <flag :iso="props.selected.flag"></flag> -->
            <span>{{props.selected.flag}}</span>
            <span>&nbsp;{{props.selected.title}}</span>
          </template>
          
          <!-- YOU COULD CHANGE ui-vue-select-match-open
              Search still will work with this example:
          -->
          <!-- <template #ui-vue-select-match-open="props">
            <span>{{props.selected.flag}}</span>
            <span>&nbsp;{{props.selected.title}}</span>
            <input
              class="ui-vue-select-search"
              v-model="props.searchText"
              ref="selectSearch"
              @input="props.onSearch($event)"
            >
          </template> -->

          <template #ui-vue-select-options="props">
            <!-- <flag :iso="props.item.flag"></flag> -->
            <span>{{props.item.flag}}</span>
            <span>&nbsp;{{props.item.title}}</span>
          </template>
        </ui-vue-select>
        <ui-vue-select
          v-model="languageSet"
          :id="`languageSet`"
          :name="`languageSet`"
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

        <div class="selected">
          {{language}}
          <span v-for="(item, i) of languageSet" :key="`item-${i}`">
            {{item}}
          </span>
        </div>
      </div>
    </div>
  </div>
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
      language: undefined,
      languageSet: undefined,
    };
  }
};
</script>

<style>
  /* input {
      margin: 8px 0;
      border: 1px solid var(--shadow, #2c3e507F);
      box-shadow: inset 0 0px 1px var(--shadow, #2c3e507F);
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 10px;
      background-color: var(--control, #ffffff);
      color: var(--control-text, #2c3e50);
  } */
  /* .layout {
      width: auto;
      max-width: max-content;
      margin-left: auto;
      margin-right: auto;
      margin-top: 15px;
      margin-bottom: 15px;
      max-width: 50%;
      word-break: break-word;
  }
  .form {
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 1px 9px 1px  var(--shadow, #2c3e507F);
      background-color: var(--body, #ffffff);
      color: var(--body-text, #2c3e50);
  }
  .form.form-group {
    text-align: left;
    margin-bottom: 10px;
  }
  .form.form-group.form-control {
    width: 100%;
    width: stretch;
  } */
</style>

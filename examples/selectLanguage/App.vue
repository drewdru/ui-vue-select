<template>
        
  <div class="layout">
    <div class="form">
      <div class="form-group">
        <ui-vue-select :items="languages" :searchKeys="['title']" :required="true">
          <template #ui-vue-select-match="props">
            <!-- <flag :iso="props.selected.flag"></flag> -->
            <span>{{props.selected.flag}}</span>
            <span>&nbsp;{{props.selected.title}}</span>
          </template>
          <template #ui-vue-select-options="props">
            <!-- <flag :iso="props.item.flag"></flag> -->
            <span>{{props.item.flag}}</span>
            <span>&nbsp;{{props.item.title}}</span>
          </template>
        </ui-vue-select>
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
      ],
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

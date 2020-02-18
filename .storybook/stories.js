import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import VuiSelect from '../src/vui-select';

Vue.use(Vuex);
Vue.use(VuiSelect);

const withSettings = component => ({
  VuiSelect: new VuiSelect(),
  ...component
});

const stories = storiesOf('VuiSelect', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <vui-select />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vui-select\`

        \`\`\`html
        <template>
          <vui-select />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <vui-select />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`vui-select\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <vui-select />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );

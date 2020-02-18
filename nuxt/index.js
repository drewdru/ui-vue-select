/*
Nuxt.js module for ui-vue-select
Usage:
    - Install ui-vue-select package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'ui-vue-select/nuxt'
            // Optionally passing options in module configuration
            ['ui-vue-select/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        UiVueSelect: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.UiVueSelect, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'ui-vue-select-plugin.template.js.tpl'),
    fileName: 'ui-vue-select-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');

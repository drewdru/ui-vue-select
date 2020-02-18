/*
Nuxt.js module for vui-select
Usage:
    - Install vui-select package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vui-select/nuxt'
            // Optionally passing options in module configuration
            ['vui-select/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VuiSelect: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VuiSelect, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vui-select-plugin.template.js.tpl'),
    fileName: 'vui-select-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');

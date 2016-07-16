var PluginBuilder = require("bit-plugin-builder");

var defaults = {
  precompile: function textDependency(meta) {
    return {
      source: "module.exports = " + JSON.stringify(meta.source) + ";"
    };
  }
};

function textPlugin(options) {
  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = textPlugin;

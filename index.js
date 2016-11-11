var PluginBuilder = require("bit-plugin-builder");

var defaults = {
  precompile: function textDependency(meta) {
    return {
      source: "module.exports = " + JSON.stringify(meta.source) + ";"
    };
  }
};

function buildPlugin(options, builder) {
  return builder
    .configure(defaults)
    .configure(options);
}

module.exports = function factory(options) {
  return function(builder) {
    return buildPlugin(options, builder);
  };
};

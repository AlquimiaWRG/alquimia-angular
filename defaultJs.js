"use strict";

module.exports = function(defaultJs) {
  defaultJs.push({
    name: 'angular',
    elements: [],
    compile: function compileAngular() {
      var res = [];

      this.elements.forEach(function eachRequire(require) {
        if (require.indexOf('require') < 0) require = "require('" + require + "');";
        if (res.indexOf(require) < 0) res.push(require);
      });

      return '  ' + res.join('\n  ');
    }
  }, {
    name: 'modules',
    elements: [],
    compile: function compileModules() {
      return "  var module = angular.module('" + alquimia.config.appName.camelCase + "', ['" +
        this.elements.join("', '") + "']);";
    }
  }, {
    name: 'configs',
    elements: [],
    compile: function compileConfigs() {
      return '  ' + this.elements.join('\n  ');
    }
  });

  return defaultJs;
};

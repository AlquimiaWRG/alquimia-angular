"use strict";

module.exports = function(defaults) {
  var appDir = alquimia.getPath('appDir');
  var scriptsDir = alquimia.getPath('scriptsDir');

  defaults.push({
    name: 'angular',
    file: appDir + '/' + scriptsDir + '/index.js',
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
    file: appDir + '/' + scriptsDir + '/index.js',
    elements: [],
    compile: function compileModules() {
      return "  var module = angular.module('" + alquimia.config.appName.camelCase + "', ['" +
        this.elements.join("', '") + "']);";
    }
  }, {
    name: 'configs',
    file: appDir + '/' + scriptsDir + '/index.js',
    elements: [],
    compile: function compileConfigs() {
      return '  ' + this.elements.join('\n  ');
    }
  });

  return defaults;
};

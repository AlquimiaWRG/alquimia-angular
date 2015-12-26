"use strict";

module.exports = function(html) {
  html.attributes['ng-app'] = alquimia.config.appName.camelCase;
  return html;
};

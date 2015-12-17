"use strict";

module.exports = function(defaultJs) {
  defaultJs.getElement('angular').push('angular', 'angular-sanitize');
  defaultJs.getElement('modules').push('ngSanitize');
  return defaultJs;
};

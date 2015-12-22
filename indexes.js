"use strict";

module.exports = function(defaults) {
  defaults.getElement('angular').push('angular', 'angular-sanitize');
  defaults.getElement('modules').push('ngSanitize');
  return defaults;
};

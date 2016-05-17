'use strict';

var _ = require('lodash');

function Scope() {
  this.$$watchers = [];
}

function initWatchVal() { }

Scope.prototype.$watch = function (watchFn, listenerFn) {
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn,
    last: initWatchVal
  };
  this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function () {
  var self = this;
  var newValue;
  var oldValue;

  _.forEach(this.$$watchers, function (watcher) {
    newValue = watcher.watchFn(self);
    oldValue = watcher.last;
    if (newValue !== oldValue) {
      watcher.last = newValue;
      oldValue = (oldValue === initWatchVal ? newValue : oldValue);
      watcher.listenerFn(newValue, oldValue, self);
    }
  });
};

module.exports = Scope;

var noop = require('rx.utils').noop;

/*
* Provides a set of static methods for creating Subscriptions.
* @param {Function} unsubscribe Action to run during the first call to unsubscribe. The action is guaranteed to be run at most once.
*/
function Disposable (action) {
  this.isDisposed = false;
  this.action = action || noop;
};

/** Performs the task of cleaning up resources. */
Disposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.action();
    this.isDisposed = true;
  }
};

/**
* Creates a Subscription object that invokes the specified action when unsubscribed.
* @param {Function} unsubscribe Action to run during the first call to unsubscribe. The action is guaranteed to be run at most once.
* @return {Subscription} The Subscription object that runs the given action upon disposal.
*/
Disposable.create = function (action) { return new Disposable(action); };

/**
* Gets the Subscription that does nothing when unsubscribed.
*/
Disposable.empty = { dispose: noop };

module.exports = Disposable;

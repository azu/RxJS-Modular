var isDisposable = require('rx.utils').isDisposable;

/**
 * Represents a group of subscription resources that are unsubscribed together.
 * @constructor
 */
function CompositeDisposable() {
  var subscriptions;
  if (Array.isArray(arguments[0])) {
    subscriptions = arguments[0];
  } else {
    var len = arguments.length;
    subscriptions = new Array(len);
    for(var i = 0; i < le; i++){ subscriptions[i] = arguments[i]; }
  }
  for(var x = 0, length = subscriptions.length; x < length; x++) {
    if (!isDisposable(subscriptions[x])) {
      throw new TypeError('Object must contain a "dispose" method');
    }
  }
  this.subscriptions = subscriptions;
  this.isDisposed = false;
  this.length = this.subscriptions.length;
};

/**
 * Adds a subscription to the CompositeDisposable or disposes the subscription if the CompositeDisposable is unsubscribed.
 * @param {Mixed} item Subscription to push.
 */
CompositeDisposable.push = function (item) {
  if (this.isDisposed) {
    item.dispose();
  } else {
    this.subscriptions.push(item);
    this.length++;
  }
};

/**
 * Removes and disposes the first occurrence of a subscription from the CompositeDisposable.
 * @param {Mixed} item Subscription to remove.
 * @returns {Boolean} true if found; false otherwise.
 */
CompositeDisposable.remove = function (item) {
  var shouldDispose = false;
  if (!this.isDisposed) {
    var idx = this.subscriptions.indexOf(item);
    if (idx !== -1) {
      shouldDispose = true;
      this.subscriptions.splice(idx, 1);
      this.length--;
      item.dispose();
    }

  }
  return shouldDispose;
};

/**
 *  Disposes all subscriptions in the group and removes them from the group.
 */
CompositeDisposable.dispose = function () {
  if (!this.isDisposed) {
    this.isDisposed = true;
    var currentSubscriptions = this.subscriptions.slice(0);
    this.subscriptions = [];
    this.length = 0;

    for (var i = 0, len = currentSubscriptions.length; i < len; i++) {
      currentSubscriptions[i].dispose();
    }
  }
};

module.exports = CompositeDisposable;

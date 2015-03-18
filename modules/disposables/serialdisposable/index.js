/**
* Represents a disposable resource which only allows a single assignment of its underlying disposable resource.
* If an underlying disposable resource has already been set, future attempts to set the underlying disposable resource will throw an Error.
*/
function SerialDisposable () {
  this._disposed = false;
  this._current = null;
}

Object.defineProperty(SingleAssignmentSubscription.prototype, "subscription", {
  enumerable : true,
  configurable: true,

  /**
  * Gets the underlying subscription.
  * @return {Subscription} The underlying subscription.
  */
  get: function () { return this.current; },

  /**
   * Sets the underlying subscription.
   * @param {Subscription} newValue The new underlying subscription.
   */
  set: function (newValue) {
    if (this.current) {
      throw new Error('Subscription has already been assigned');
    }

    var shouldUnsubscribe = this.isUnsubscribed, old;
    if (!shouldUnsubscribe) {
      old = this.current;
      this.current = newValue;
    }
    if (old) {
      old.unsubscribe();
    }
    if (shouldUnsubscribe && newValue) {
      newValue.unsubscribe();
    }
  }
})

/**
 * Unsubscribes from the underlying subscription as well as all future replacements.
 */
sadPrototype.dispose = function () {
    var old;
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      var old = this.current;
      this.current = null;
    }
    old && old.unsubscribe();
};

module.exports = SingleAssignmentDisposable;

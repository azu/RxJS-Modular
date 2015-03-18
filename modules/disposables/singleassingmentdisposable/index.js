var isDisposable = require('rx.utils').isDisposable;

/**
* Represents a disposable resource which only allows a single assignment of its underlying disposable resource.
* If an underlying disposable resource has already been set, future attempts to set the underlying disposable resource will throw an Error.
*/
function SingleAssignmentDisposable () {
  this.isDisposed = false;
  this.current = null;
}

/**
* Gets the underlying subscription.
* @return {Disposable} The underlying subscription.
*/
SingleAssignmentDisposable.prototype.getDisposable = function () {
  return this.current;
};

SingleAssignmentDisposable.prototype.setDisposable = function (value) {
  if (this.current) {
    throw new Error('Subscription has already been assigned');
  }

  if (value && !isDisposable(value)) {
    throw new TypeError('value must have a "dispose" method.')
  }

  var shouldDispose = this.isDisposed;
  if (!shouldDispose) {
    var old = this.current;
    this.current = value;
  }
  old && old.dispose();
  shouldDispose && value.dispose();
};

/**
 * Unsubscribes from the underlying subscription as well as all future replacements.
 */
 SingleAssignmentDisposable.dispose = function () {
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      var old = this.current;
      this.current = null;
    }
    old && old.unsubscribe();
};

module.exports = SingleAssignmentDisposable;

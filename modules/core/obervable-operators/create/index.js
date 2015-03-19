var utils = require('rx.utils');
var Disposable = require('rx.disposable');
var currentThreadScheduler = require('rx.currentthreadscheduler').instance;
var AutoDetachObserver = require('rx.autodetachobserver');

var
  isFunction = utils.isFunction,
  inherits = utils.inherits,
  disposableEmpty = Disposable.empty,
  disposableCreate = Disposable.create;

var AnonymousObservable = (function (__super__) {
  inherits(AnonymousObservable, __super__);

  // Fix subscriber to check for undefined or function returned to decorate as Disposable
  function fixSubscriber(subscriber) {
    return subscriber && isFunction(subscriber.dispose) ? subscriber :
      isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
  }

  function setDisposable(s, state) {
    var ado = state[0], subscribe = state[1];
    try {
      var sub = subscribe(ado);
    } catch (e) {
      if(!ado.fail(e)) { throw e; }
    }

    ado.setDisposable(fixSubscriber(sub));
  }

  function AnonymousObservable(subscribe, parent) {
    this.source = parent;

    function s(observer) {
      var ado = new AutoDetachObserver(observer), state = [ado, subscribe];

      if (currentThreadScheduler.scheduleRequired()) {
        currentThreadScheduler.scheduleWithState(state, setDisposable);
      } else {
        setDisposable(null, state);
      }
      return ado;
    }

    __super__.call(this, s);
  }

  return AnonymousObservable;

}(Observable));

/**
 *  Creates an observable sequence from a specified subscribe method implementation.
 * @example
 *  var res = Rx.Observable.create(function (observer) { return function () { } );
 *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
 *  var res = Rx.Observable.create(function (observer) { } );
 * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
 * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
 */
module.exports = function (subscribe, parent) {
  return new AnonymousObservable(subscribe, parent);
};

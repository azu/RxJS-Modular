function ObjectDisposedError(message) {
  this.message = message || 'This object has been disposed';
  Error.call(this);
}
ObjectDisposedError.prototype = Error.prototype;

function NotImplementedError(message) {
  this.message = message || 'This operation is not implemented';
  Error.call(this);
}
NotImplementedError.prototype = Error.prototype;

module.exports = {
  /* Performs no operation */
  noop: function () { },

  /* Returns the value given without modification */
  identity: function (x) { return x; },

  /* Throws the specified error */
  throwError: function (err) { throw err; },

  /**
   * Determines whether the given function is indeed a function
   */
  isFunction: (function () {
    var isFn = function (value) {
      return typeof value == 'function' || false;
    }

    // fallback for older versions of Chrome and Safari
    if (isFn(/x/)) {
      isFn = function(value) {
        return typeof value == 'function' && Object.prototype.toString.call(value) == '[object Function]';
      };
    }
    return isFn;
  }()),

  /*
   * Inherit the prototype methods from one constructor into another. The prototype of constructor will be set to a new object created from superConstructor.
   * @param {Object} The constructor for the child object.
   * @param {Object} The superConstructor for the parent object.
   */
  inherits: function (child, parent) {
    function __() { this.constructor = child; }
    __.prototype = parent.prototype;
    child.prototype = new __();
  },

  /*
   * Adds properties to the given object
   * @param {Object} obj The object to add the properties.
   * @param {Arguments} arguments The items to add to the object.
   */
  addProperties: function (obj) {
    var sources = [].slice.call(arguments, 1);
    for (var i = 0, len = sources.length; i < len; i++) {
      var source = sources[i];
      for (var prop in source) {
          obj[prop] = source[prop];
      }
    }
  },


  /**
   * Checks whether the given object is disposed
   */
  checkDisposed: function (obj) {
    if (obj.isDisposed) { throw new ObjectDisposedError(); }
  },

  /**
   * Determines whether the given object is a disposable
   */
  isDisposable: function (obj) {
    return obj && this.isFunction(obj.dispose);
  },

  /**
   * Determines whether the given object is a Promise
   */
  isPromise: function (obj) {
    return obj && this.isFunction(obj.then);
  },

  // Errors
  ObjectDisposedError : ObjectDisposedError,
  NotImplementedError: NotImplementedError
};

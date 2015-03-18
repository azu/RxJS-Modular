# Modular Reactive Extensions for JavaScript RxJS #

[Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) composed entirely of small modules.

The intent for this project is to make each operator available as its own export.  For example, one could map and filter a given source such as the following:

```js
var map = require('rx.observable.map');
var filter = require('rx.observable.filter');
var ofItems = require('rx.observable.of');

var source =
  filter(
    map(
      ofItems(1,2,3,4,5),
      function (x, i, o) {
        return x * x + i;
      }),
    function (x, i, o) {
      return x % 2 === 0;
    }
  );

source.subscribe(
  function (x) {
    console.log('Next', x);
  });

// => Next 2
// => Next 10
// => Next 26
```

Alternatively, you can chain them together very easily such as the following.
```js
var Observable = require('rx.observable');
var map = require('rx.observable.map');
var filter = require('rx.observable.filter');
var ofItems = require('rx.observable.of');

Observable.prototype.map = function (selector, thisArg) {
  return map(this, selector, thisArg);
};
Observable.prototype.filter = function (predicate, thisArg) {
  return filter(this, predicate, thisArg);
};
Observable.of = function () {
  ofItems.call(null, arguments);
};

var source = Observable.of(1,2,3,4,5)
  .map(function (x, i, o) {
    return x * x + i;
  })
  .filter(function (x, i, o) {
    return x % 2 === 0;
  });

source.subscribe(
  function (x) {
    console.log('Next', x);
  });

// => Next 2
// => Next 10
// => Next 26
```

## Implemented and Planned Modules ##

Note that this is a work in progress and feedback is welcome!

### Collections ##
- `rx.priorityqueue` - `PriorityQueue`

### Core ###
- `rx.observable` - `Observable`

### Core Operators ###
- `rx.observable.create` - `create`
- `rx.observable.filter` - `filter`
- `rx.observable.map` - `map`

### Disposables ###
- `rx.compositedisposable` - `CompositeDisposable`
- `rx.disposable` - `Disposable`
- `rx.serialdisposable` - `SerialDisposable`
- `rx.singleassignmentdisposable` - `SingleAssignmentDisposable`

### Schedulers ###
- `rx.scheduler` - `Scheduler`

### Utilities ###
- `rx.utils` - `utils`

## License ##

Copyright (c) Microsoft  All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.

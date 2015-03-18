# rx.compositedisposable - CompositeDisposable #

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) Composite Disposable object.

Represents a group of disposable resources that are disposed together.

This is an example of using a `CompositeDisposable`.

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable(
  Disposable.create(function () { console.log('one'); }),
  Disposable.create(function () { console.log('two'); }),
  Disposable.create(function () { console.log('three'); })
);

// Add another
c.push(Disposable.create(function () { console.log('four'); }));

// Clean up all of them
c.dispose();
// => one
// => two
// => three
// => four
```

## Documentation ##

Composite Disposable Members

- [`CompositeDisposable.ctor`](#compositedisposablearsorarray)
- [`CompositeDisposable.prototype.push`](#compositedisposableprototypepushitem)
- [`CompositeDisposable.prototype.remove`](#compositedisposableprototyperemoveitem)

* * *

### <a id="#compositedisposable"></a>`CompositeDisposable(argsOrArray)`
<a href="#compositedisposables">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Creates a new instance of the `CompositeDisposable` class with the optional arguments or an array of resources that will be unsubscribed together.

#### Arguments
1. `argsOrArray` *(Array | Arguments)*: Disposables that will be unsubscribed together.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable(
  Disposable.create(function () { console.log('one'); }),
  Disposable.create(function () { console.log('two'); }),
  Disposable.create(function () { console.log('three'); })
);

// Clean up all of them
c.dispose();;
// => one
// => two
// => three
```
* * *

### <a id="#compositedisposableprototypeclear"></a>`CompositeDisposable.prototype.clear()`
<a href="#compositedisposableprototypeclear">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Removes and unsubscribes from all the subscriptions from the `CompositeDisposable`, but does not dispose the `CompositeDisposable`.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable(
  Disposable.create(function () { console.log('one'); }),
  Disposable.create(function () { console.log('two'); }),
  Disposable.create(function () { console.log('three'); })
);

c.clear();
// => one
// => two
// => three

console.log(c.length);
// => 0

c.push(Disposable.create(function () { console.log('four'); }));

console.log(c.length);
// => 1
```
* * *

### <a id="#compositedisposableprototypecontainsitem"></a>`CompositeDisposable.prototype.contains(item)`
<a href="#compositedisposableprototypecontainsitem">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Determines whether the `CompositeDisposable` contains a specific subscription.

#### Arguments
1. `item` *(Disposable)*: The subscription to search for.

#### Returns
*(Boolean)*: `true` if found; else `false`.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable();

var s = Disposable.create(function () { console.log('one'); });

c.push(s);

var result = c.contains(s);
console.log(result);
// => true
```
* * *

### <a id="#compositedisposableprototypepushitem"></a>`CompositeDisposable.prototype.push(item)`
<a href="#compositedisposableprototypepushitem">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Adds a disposable to the `CompositeDisposable` or unsubscribes from the subscription if the `CompositeDisposable` is unsubscribed.

#### Arguments
1. `item` *(Disposable)*: The Disposable to add.

#### Example

```js
// Using push before unsubscribing
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable();

// Add another
c.push(Disposable.create(function () { console.log('one'); }));

// Clean up all of them
c.dispose();;
// => one

// Add another which automatically disposes
c.push(Disposable.create(function () { console.log('two'); }));
// => two
```
* * *

### <a id="#compositedisposableprototyperemoveitem"></a>`CompositeDisposable.prototype.remove(item)`
<a href="#compositedisposableprototyperemoveitem">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Removes and unsubscribes from the first occurrence of a subscription from the `CompositeDisposable`.

#### Arguments
1. `newValue` *(Disposable)*: `Disposable` to remove

#### Returns
*(Boolean)*: `true` if removed; else `false`.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

var c = new CompositeDisposable();

var s = Disposable.create(function () { console.log('one'); });

c.push(s);

var result = c.remove(s);
console.log(result);
// => true
```
* * *

### <a id="#compositedisposableprototypetoarray"></a>`CompositeDisposable.prototype.toArray()`
<a href="#compositedisposableprototypetoarray">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Gets or sets the underlying subscription. After disposal, the result of getting this property is undefined.
An error is thrown if the CompositeDisposable has already been assigned to.

#### Arguments
1. `newValue` *(Disposable)*: The new subscription value.

#### Returns
*(Disposable)*: The underlying Disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

// Create the instance
var subscription = new CompositeDisposable();

// Set the subscription
susbcription.subscription = Disposable.empty;

// Get the subscription
var sub = subscription.subscription;

// Unsubscribe
subscription.dispose();;
```
* * *

### <a id="#compositedisposableprototypeunsubscribe"></a>`CompositeDisposable.prototype.dispose();`
<a href="#compositedisposableprototypeunsubscribe">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/compositedisposable/index.js "View in source") [&#x24C9;][1]

Unsubscribes from the underlying subscription.

#### Example

```js
var Disposable = require('rx.disposable');
var CompositeDisposable = require('rx.compositedisposable');

// Create the instance
var subscription = new CompositeDisposable();

// Set the subscription
susbcription.subscription = Disposable.empty;

// Get the subscription
var sub = subscription.subscription;

// Unsubscribe
subscription.dispose();;
```
* * *

## Installation ##

Using [npm](http://npmjs.org):

```bash
npm rx-singleassignmentdisposable
```

## License ##

Copyright (c) Microsoft All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.

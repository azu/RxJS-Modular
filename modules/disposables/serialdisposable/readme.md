# rx.serialdisposable - RxJS SerialDisposable #

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) Serial Assignment Disposable object.

Represents a disposable resource whose underlying disposable resource can be replaced by another disposable resource, causing automatic disposal of the previous underlying disposable resource.

## Documentation ##

SingleAssignment Disposable Members

- [`SerialDisposable.ctor`](#serialdisposable)
- [`SerialDisposable.prototype.getDisposable`](#serialdisposableprototypegetdisposable)
- [`SerialDisposable.prototype.setDisposable`](#serialdisposableprototypesetdisposable)
- [`SerialDisposable.prototype.dispose`](#serialdisposableprototypedispose)

* * *

### <a id="#serialdisposable"></a>`SerialDisposable`
<a href="#serialdisposables">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/serialdisposable/index.js "View in source")

Creates a new instance of the SerialDisposable class.

#### Example

```js
var Disposable = require('rx.disposable');
var SerialDisposable = require('rx.serialdisposable');

// Create the instance
var disposable = new SerialDisposable();

// Set the disposable
susbcription.disposable = Disposable.empty;

// Unsubscribe
disposable.unsubscribe();
```
* * *

### <a id="#serialdisposableprototypegetdisposable"></a>`SerialDisposable.prototype.getDisposable()`
<a href="#serialdisposableprototypedisposable">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/serialdisposable/index.js "View in source")

Gets or sets the underlying disposable. After disposal, the result of getting this property is undefined.

#### Arguments
1. `newValue` *(Disposable)*: The new disposable value.

#### Returns
*(Disposable)*: The underlying Disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var SerialDisposable = require('rx.serialdisposable');

// Create the instance
var disposable = new SerialDisposable();

// Set the disposable
susbcription.disposable = Disposable.empty;

// Get the disposable
var sub = disposable.disposable;

// Unsubscribe
disposable.dispose();
```
* * *

### <a id="#serialdisposableprototypedispose"></a>`SerialDisposable.prototype.dispose()`
<a href="#serialdisposableprototypedispose">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/serialdisposable/index.js "View in source") [&#x24C9;][1]

Unsubscribes from the underlying disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var SerialDisposable = require('rx.serialdisposable');

// Create the instance
var disposable = new SerialDisposable();

// Set the disposable
susbcription.setDisposable(Disposable.empty);

// Get the disposable
var sub = disposable.getDisposable();

// Unsubscribe
disposable.dispose();
```
* * *

## Installation ##

Using [npm](http://npmjs.org):

```bash
npm rx.serialdisposable
```

## License ##

Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.

# rx.singleassignmentdisposable - RxJS SingleAssignmentDisposable #

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) Single Assignment Disposable object.

Represents a disposable resource which only allows a single assignment of its underlying disposable resource.
If an underlying disposable resource has already been set, future attempts to set the underlying disposable resource will throw an Error.

## Documentation ##

SingleAssignment Disposable Members

- [`SingleAssignmentDisposable.ctor`](#singleassignmentdisposable)
- [`SingleAssignmentDisposable.prototype.getDisposable`](#singleassignmentdisposableprototypegetdisposable)
- [`SingleAssignmentDisposable.prototype.setDisposable`](#singleassignmentdisposableprototypesetdisposable)
- [`SingleAssignmentDisposable.prototype.dispose`](#singleassignmentdisposableprototypedispose)

* * *

### <a id="#singleassignmentdisposable"></a>`SingleAssignmentDisposable`
<a href="#singleassignmentdisposables">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/singleassignmentdisposable/index.js "View in source")

Creates a new instance of the SingleAssignmentDisposable class.

#### Example

```js
var Disposable = require('rx.disposable');
var SingleAssignmentDisposable = require('rx.singleassignmentdisposable');

// Create the instance
var disposable = new SingleAssignmentDisposable();

// Set the disposable
susbcription.disposable = Disposable.empty;

// Unsubscribe
disposable.unsubscribe();
```
* * *

### <a id="#singleassignmentdisposableprototypegetdisposable"></a>`SingleAssignmentDisposable.prototype.getDisposable()`
<a href="#singleassignmentdisposableprototypedisposable">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/singleassignmentdisposable/index.js "View in source")

Gets or sets the underlying disposable. After disposal, the result of getting this property is undefined.
An error is thrown if the SingleAssignmentDisposable has already been assigned to.

#### Returns
*(Disposable)*: The underlying Disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var SingleAssignmentDisposable = require('rx.singleassignmentdisposable');

// Create the instance
var disposable = new SingleAssignmentDisposable();

// Set the disposable
susbcription.disposable = Disposable.empty;

// Get the disposable
var sub = disposable.disposable;

// Unsubscribe
disposable.dispose();
```
* * *

### <a id="#singleassignmentdisposableprototypesetdisposablevalue"></a>`SingleAssignmentDisposable.prototype.setDisposable(value)`
<a href="#singleassignmentdisposableprototypedisposable">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/singleassignmentdisposable/index.js "View in source")

Sets the underlying disposable. After disposal, the result of getting this property is undefined.
An error is thrown if the SingleAssignmentDisposable has already been assigned to.

#### Arguments
1. `newValue` *(Disposable)*: The new disposable value.

#### Returns
*(Disposable)*: The underlying Disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var SingleAssignmentDisposable = require('rx.singleassignmentdisposable');

// Create the instance
var disposable = new SingleAssignmentDisposable();

// Set the disposable
susbcription.disposable = Disposable.empty;

// Get the disposable
var sub = disposable.disposable;

// Unsubscribe
disposable.dispose();
```
* * *

### <a id="#singleassignmentdisposableprototypedispose"></a>`SingleAssignmentDisposable.prototype.dispose()`
<a href="#singleassignmentdisposableprototypedispose">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modular/blob/master/modules/disposables/singleassignmentdisposable/index.js "View in source")

Unsubscribes from the underlying disposable.

#### Example

```js
var Disposable = require('rx.disposable');
var SingleAssignmentDisposable = require('rx.singleassignmentdisposable');

// Create the instance
var disposable = new SingleAssignmentDisposable();

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
npm rx.singleassignmentdisposable
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

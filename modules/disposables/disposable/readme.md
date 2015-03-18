# rx.disposable - RxJS Disposable class #

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) Disposable object.

## Documentation ##

Disposable Members

- [`Disposable.create`](#disposablecreateaction)
- [`Disposable.empty`](#disposableempty)
- [`Disposable.prototype.dispose`](#disposableprototypedispose)

* * *

### <a id="#disposablecreateaction"></a>`Disposable.create(action)`
<a href="#disposablecreateaction">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/disposable/disposable.js "View in source") [&#x24C9;][1]

Creates a new instance of the SingleAssignmentDisposable class.

#### Example

```js
var Disposable = require('rx-disposable')

// Create the instance
var s = Disposable.create(function () {
  console.log('disposed');
});

s.dispose();
// => disposed

s.dispose();
```
* * *

### <a id="#disposableempty"></a>`Disposable.empty`
<a href="#disposableempty">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/disposable/disposable.js "View in source") [&#x24C9;][1]

Gets the disposable that does nothing when disposed.

#### Returns
*(Disposable)*: A disposable which does nothing when disposed.

#### Example

```js
var Disposable = require('rx-disposable')

var empty = Disposable.empty;

empty.dispose();
```
* * *

### <a id="#disposableprototypedispose"></a>`Disposable.prototype.dispose()`
<a href="#disposableprototypedispose">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/disposables/disposable/index.js "View in source") [&#x24C9;][1]

Unsubscribes from the underlying disposable.

#### Example

```js
var Disposable = require('rx.disposable')

// Create the instance
var s = Disposable.create(function () {
  console.log('disposed');
});

s.dispose();
// => disposed

s.dispose();
```
* * *

## Installation ##

Using [npm](http://npmjs.org):

```bash
npm rx.disposable
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

rx.utils
========

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) utilities.

## Documentation ##

- [`identity`](#identityx)
- [`noop`](#noop)
- ['throwError'](#throwerrorerr)

* * *

### <a id="identityx"></a>`identity(x)`
<a href="#identityx">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/utils/index.js "View in source") [&#x24C9;][1]

A function which returns its value unmodified.

#### Arguments
1. `x` *(Any)*: The value to return.

#### Returns
*(Any)*: The value given as the parameter.

#### Example

```js
var identity = require('rx.utils').identity;

// Returns its value
var x = identity(42);
console.log(x);
// => 42
```
* * *

### <a id="noop"></a>`noop`
<a href="#noop">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/utils/index.js "View in source") [&#x24C9;][1]

A function which does nothing

#### Example

```js
var noop = require('rx.utils').noop;

// This does nothing!
noop();
```
* * *

### <a id="throwerrorerr"></a>`throwError(err)`
<a href="#throwerrorerr">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/utils/index.js "View in source") [&#x24C9;][1]

Throws the specified error

#### Arguments
1. `err` *(Any)*: The error to throw

#### Example

```js
var throwError = require('rx.utils').throwError;

// Returns its value
throwError(new Error('woops'))
// => Error: woops
```
* * *

## Installation ##

Using [npm](http://npmjs.org):

```bash
npm rx-noop
```

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

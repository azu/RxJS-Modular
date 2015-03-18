RxJS-Modules
============

[Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) composed entirely of small modules.

The intent for this project is to make each operator available as its own export.  For example, one could map and filter a given source such as the following:

```js
var map = require('rx-map');
var filter = require('rx-filter');
var of = require('rx-of');

var source = 
  filter(
    map(
      of(1,2,3,4,5),
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

Note that this is a work in progress and feedback is welcome!

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

rx-singleassignmentdisposable
=============================

The [Reactive Extensions for JavaScript (RxJS)](https://github.com/Reactive-Extensions/RxJS) Single Assignment Subscription object.

Represents a subscription resource which only allows a single assignment of its underlying subscription resource.
If an underlying subscription resource has already been set, future attempts to set the underlying subscription resource will throw an Error.

## Documentation ##

SingleAssignment Subscription Members

- [`SingleAssignmentSubscription.ctor`](#singleassignmentsubscription)
- [`SingleAssignmentSubscription.prototype.subscription`](#singleassignmentsubscriptionprototypesubscription)
- [`SingleAssignmentSubscription.prototype.unsubscribe`](#singleassignmentsubscriptionprototypeunsubscribe)

* * *

### <a id="#singleassignmentsubscription"></a>`SingleAssignmentSubscription`
<a href="#singleassignmentsubscriptions">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/subscriptions/singleassignmentsubscription/singleassignmentsubscription.js "View in source") [&#x24C9;][1]

Creates a new instance of the SingleAssignmentSubscription class.

#### Example 

```js
var Subscription = require('rx-subscription');
var SingleAssignmentSubscription = require('rx-singleassignmentsubscription');

// Create the instance
var subscription = new SingleAssignmentSubscription();

// Set the subscription
susbcription.subscription = Subscription.empty;

// Unsubscribe
subscription.unsubscribe();
```
* * *

### <a id="#singleassignmentsubscriptionprototypesubscription"></a>`SingleAssignmentSubscription.prototype.subscription`
<a href="#singleassignmentsubscriptionprototypesubscription">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/subscriptions/singleassignmentsubscription/singleassignmentsubscription.js "View in source") [&#x24C9;][1]

Gets or sets the underlying subscription. After disposal, the result of getting this property is undefined.
An error is thrown if the SingleAssignmentSubscription has already been assigned to.

#### Arguments
1. `newValue` *(Subscription)*: The new subscription value.

#### Returns
*(Subscription)*: The underlying Subscription.

#### Example 

```js
var Subscription = require('rx-subscription');
var SingleAssignmentSubscription = require('rx-singleassignmentsubscription');

// Create the instance
var subscription = new SingleAssignmentSubscription();

// Set the subscription
susbcription.subscription = Subscription.empty;

// Get the subscription
var sub = subscription.subscription;

// Unsubscribe
subscription.unsubscribe();
```
* * *

### <a id="#singleassignmentsubscriptionprototypeunsubscribe"></a>`SingleAssignmentSubscription.prototype.unsubscribe()`
<a href="#singleassignmentsubscriptionprototypeunsubscribe">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-Modules/blob/master/modules/subscriptions/singleassignmentsubscription/singleassignmentsubscription.js "View in source") [&#x24C9;][1]

Unsubscribes from the underlying subscription.

#### Example 

```js
var Subscription = require('rx-subscription');
var SingleAssignmentSubscription = require('rx-singleassignmentsubscription');

// Create the instance
var subscription = new SingleAssignmentSubscription();

// Set the subscription
susbcription.subscription = Subscription.empty;

// Get the subscription
var sub = subscription.subscription;

// Unsubscribe
subscription.unsubscribe();
```
* * *

## Installation ##

Using [npm](http://npmjs.org):

```bash
npm rx-singleassignmentdisposable
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
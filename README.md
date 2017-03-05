# random-access-directory

Store a bunch of [random-access-file](https://npmjs.org/package/random-access-file) instances in a common directory!

## Example

```js
var rad = require('random-access-directory')

var store = rad('/tmp/')

// create a store based on the factory
var a = store('hypercore.txt')
a.write(0, Buffer('hello'), ...)
// => /tmp/hypercore.txt

// also create a store based on a store!
var b = a('hyperdrive.txt')
b.write(0, Buffer('you'), ...)
// => /tmp/hyperdrive.txt
```

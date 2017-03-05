var rad = require('./')
var test = require('tape')
var fs = require('fs')

test('rad', function (t) {
  t.plan(6)
  var store = rad('/tmp/')

  var a = store('hypercore.txt')
  a.write(0, Buffer('hello'), function (err) {
    t.error(err)

    fs.readFile('/tmp/hypercore.txt', function (err, buf) {
      t.error(err)
      t.deepEquals(buf, Buffer('hello'))
    })
  })

  var b = a('hyperdrive.txt')
  b.write(0, Buffer('you'), function (err) {
    t.error(err)

    fs.readFile('/tmp/hyperdrive.txt', function (err, buf) {
      t.error(err)
      t.deepEquals(buf, Buffer('you'))
    })
  })
})

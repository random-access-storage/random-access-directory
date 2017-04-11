var raf = require('random-access-file')
var join = require('path').join

module.exports = createFactory

function createFactory (fn) {
  if (typeof fn === 'string') {
    var dir = fn
    fn = function (name) {
      return raf(join(dir, name))
    }
  }

  function createRad (name) {
    function rad (name) {
      return createRad(name)
    }
    var store = fn(name)

    rad.open = function (cb) {
      store.open(cb)
    }

    rad.write = function (offset, buf, cb) {
      store.write(offset, buf, cb)
    }

    rad.read = function (offset, len, cb) {
      store.read(offset, len, cb)
    }

    rad.close = function (cb) {
      store.close(cb)
    }

    rad.end = function (opts, cb) {
      store.end(opts, cb)
    }

    rad.unlink = function (cb) {
      store.unlink(cb)
    }

    Object.defineProperty(rad, 'length', {
      get: function () {
        return store.length
      }
    })

    return rad
  }

  return createRad
}

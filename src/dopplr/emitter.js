import Debug from 'debug'
import EventEmitter from 'events'

class DopplrEmitter extends EventEmitter {
  constructor (name) {
    super()

    this.debug = Debug(`dopplr:emitter:${name}`)

    this.setMaxListeners(9999)
  }

  emit (...args) {
    this.debug(...args)
    super.emit(...args)
  }

  on (...args) {
    this.debug(`on:${args[0]}`)
    super.on(...args)
  }

  once (...args) {
    this.debug(`once:${args[0]}`)
    super.once(...args)
  }
}

export {
  DopplrEmitter
}

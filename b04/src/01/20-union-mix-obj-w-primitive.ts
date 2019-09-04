;(()=>{

  type Data = {foo?: string, bar?: string} | undefined

  function printData(data: Data):void {

    switch (true) {
      case !!(data && data.foo):
        console.log('foo: ', data.foo) // Object is possibly 'undefined'.
        break
      case !!(data && data.bar):
        console.log('bar: ', data.bar) // Object is possibly 'undefined'.
        break
      default:
        console.log('no data')
    }
  }

  printData(undefined)

  printData({foo:'foo'})
  printData({bar:'bar'})
  printData({})

  })()

  ;(()=>{

  type Data = {foo?: string, bar?: string} | undefined | string

  function printData(data: Data):void {

    if (data === undefined) {
        console.log('is undefined')
    } else if (typeof data === 'string') {
        console.log('is string')
    } else {
      switch (true) {
        case !!(data && data.foo):
          console.log('foo: ', data.foo)
          break
        case !!(data && data.bar):
          console.log('bar: ', data.bar)
          break
        default:
          console.log('no data')
      }
    }
  }

  printData({foo:'foo'})
  printData({bar:'bar'})
  printData({})

  printData(undefined)
  printData('baz')

  })()

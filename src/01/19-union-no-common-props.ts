;(()=>{

  type Data = {foo: string;} | {bar: string} | {}

  function printData(data: Data):void {

    switch (true) {
      case !!(data && data.foo):       // Property 'foo' does not exist on type 'Data'. Property 'foo' does not exist on type '{}'.
        console.log('foo: ', data.foo) // Property 'foo' does not exist on type 'Data'. Property 'foo' does not exist on type '{}'.
        break
      case !!(data && data.bar):       // Property 'foo' does not exist on type 'Data'. Property 'foo' does not exist on type '{}'.
        console.log('bar: ', data.bar) // Property 'foo' does not exist on type 'Data'. Property 'foo' does not exist on type '{}'.
        break
      default:
        console.log('no data')
    }
  }

  printData({foo:'foo'})
  printData({bar:'bar'})
  printData({})

})()

;(()=>{

  type Data = {foo?: string, bar?: string}

  function printData(data: Data):void {

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

  printData({foo:'foo'})
  printData({bar:'bar'})
  printData({})

})()

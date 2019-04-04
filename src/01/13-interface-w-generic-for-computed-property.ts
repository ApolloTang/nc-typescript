;(()=>{

  type DataShape = {_id:string, name:string}|{}

  interface ComputedPropertyIntf<R> {
    [id: string]:R
  }

  const myDict:ComputedPropertyIntf<DataShape> = {}

  console.log(JSON.stringify(myDict, null, 2))

  myDict['1223'] = {
    _id: '1223',
    name: 'hello'
  }
  console.log(JSON.stringify(myDict, null, 2))

  const newId:string = '2222'
  const myDict_extended:ComputedPropertyIntf<DataShape>  = {
    ...myDict,
    [newId]: { _id: newId, name: 'bye' }
  }

  console.log(JSON.stringify(myDict_extended, null, 2))

})()

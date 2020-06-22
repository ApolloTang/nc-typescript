[
,(()=>{

  interface MyObject<T, R> {
    data: T[];
    getData(): R
  }

  const obj:MyObject<number, string> = {
    data: [1,2,3,4],
    getData: function() {return this.data.join(' ') }
  }

  console.log(obj.data) // [1, 2, 3, 4]
  console.log(obj.getData()) // '1 2 3 4'

}
)()

, (()=>{


})()

]

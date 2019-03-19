[
,(()=>{

  interface MyIntf<T> {
    addItem: (newItem: T) => void;
    getItemByIndex: (index:number) => T;
    getItems: () => Array<T>;
  }

  class MyClass<T> implements MyIntf<T> {
    private _items: T[] = [];
    addItem(newItem: T) { this._items.push(newItem) }
    getItemByIndex(index: number) { return this._items[index] }
    getItems() { return this._items }
  }

  type T = string|number

  let myClass = new MyClass<T>()
  myClass.addItem('x')
  myClass.addItem(1)
  console.log(myClass.getItemByIndex(0))
  console.log(myClass.getItems())

  // type declartion on assinged variable is ok too
  let myClass2: MyIntf<T> = new MyClass()
  myClass2.addItem('x')
  myClass2.addItem(1)
  console.log(myClass2.getItemByIndex(0))
  console.log(myClass2.getItems())

}
)()

, (()=>{


})()

]

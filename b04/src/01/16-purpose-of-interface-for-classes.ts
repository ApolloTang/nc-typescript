[
,(()=>{

  // As a reminder for
  // the purpose of interfacing a class
  // ----------------------------------
  // Interface for class give you a prescription
  // for the shape of your class.
  //
  // Below we comment out getItems() in the interface to show
  // you that calling that method will result in type error.

  interface MyIntf<T> {
    addItem: (newItem: T) => void;
    getItemByIndex: (index:number) => T;
    // getItems: () => Array<T>;    // <--- commented out on purpose
  }

  class MyClass<T> implements MyIntf<T> {
    private _items: T[] = [];
    addItem(newItem: T) { this._items.push(newItem) }
    // getItemByIndex(index: number) { return this._items[index] }  //  <--- commented out on purpose
    getItems() { return this._items }
  }

  type T = string|number

  let myClass = new MyClass<T>()
  myClass.addItem('x')
  myClass.addItem(1)
  console.log(myClass.getItemByIndex(0))
                  //  ^^^^^^^^^^^^^^
  console.log(myClass.getItems())

  let myClass2: MyIntf<T> = new MyClass()
  myClass2.addItem('x')
  myClass2.addItem(1)
  console.log(myClass2.getItemByIndex(0))
  console.log(myClass2.getItems())
                   //  ^^^^^^^^^^
                   // interface enforce
                   // the shape of the class.
                   // Here getItems() is illegal
                   // b/c it has been commented out.

}
)()

]

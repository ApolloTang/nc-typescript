;
(function () {

  class MyClass<T>{
    private _items: T[] = [];
    addItem(newItem: T) { this._items.push(newItem) }
    getItemByIndex(index: number) { return this._items[index] }
    // getItems() { return this._items } // <--- commented out on purpose
  }

  type T = string|number

  let myClass = new MyClass<T>()
  myClass.addItem('x')
  myClass.addItem(1)
  console.log(myClass.getItemByIndex(0))
  console.log(myClass.getItems())

})();

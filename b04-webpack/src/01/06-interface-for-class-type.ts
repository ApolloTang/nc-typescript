

interface MyInterface {
  methodFoo: () => void;
}

class MyClass implements MyInterface {
  methodFoo() {
    console.log('Foo')
  }
}

let myInstance: MyInterface = new MyClass()
myInstance.methodFoo()


// note that interface can also apply to object
let myObj:MyInterface = {
  methodFoo: ()=>{console.log('Foo')}
}
myObj.methodFoo()


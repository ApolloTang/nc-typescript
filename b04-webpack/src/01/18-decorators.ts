;(()=>{

// Decorator example one
function inject(options: { api_version: string }) {
   return (target:any) => {
     target.apiVersion = options.api_version;
   }
}

@inject({
  api_version: '0.0.0'
})
class MyClass {
  static apiVersion: string;
}

const myclass:MyClass = new MyClass()
console.log('MyClass.apiVersion: ', MyClass.apiVersion)




// Decorator example two
function readonly():Function {
  return function(target:any, name:string, descriptor:PropertyDescriptor) {
    descriptor.writable = false;
  }
}
class Example {
  a:number = 3
  @readonly()
  b:number = 5
}

const e = new Example();
try {
  e.a = 1;
  e.b = 2;
  console.log('e.a:, e.b: ', e.a, e.b)
} catch (e) {
  console.log('Typeerror: attempted to reassign readonly')
}

})()

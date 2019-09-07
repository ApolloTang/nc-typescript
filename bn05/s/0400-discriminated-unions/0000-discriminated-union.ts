

interface Square {
  kind: 'square'  // [1]
  size: number
}


interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle // [2]


// [1]
// This is a unique literal member (property) that identifies that
// this interface is a Square -- It is called the 'discriminant property'
// The type of discriminant property is 'string literal' type.

// [2]
// This is the 'Discriminated Union Type' or 'Tagged Union Type'.
// What so special about it is that its members all has a discriminant
// property.


//  Driscriminated Union Types can be used with control flow type analysis
//  to give you type guard.
//
//  As the program flows down switch logic that checked against the
//  discriminate property, a type narrowing is result
//  on each switch gates via process of elimination.
//
//  Within each switch block the program know what type has been
//  passed into the block and thus handle appropreately without additional
//  type check.
//
//  That means you can write plain javascript within each block and
//  still benefit from type checking, and not worry about calling
//  non existent method or doing operation on non existent property.


function area(s: Shape):(number|never) {
  switch (s.kind) {
    case 'square': {
      type S = typeof s // S is type Square in this block

      const _area =  s.size * s.size
      return _area
    }

    case 'rectangle': {
      type S = typeof s // S is type rectangle in this block

      const _area = s.width * s.height
      const _area_wrong = s.size * s.size
      //                    ^^^^     ^^^^
      //   ERROR
      //   Property 'size' does not exist on type 'Rectangle'

      return _area
    }

    default: {
      // we have eleminate 'square' and 'ractangle' here
      type S = typeof s // S is type Circle

      const _exhaustiveType: never = s.kind
      //    ^^^^^^^^^^^^^^^^
      //    ERROR : `Circle` is not assignable to `never`
      throw Error(`Area calculation not impliment for: ${_exhaustiveType}`)
    }

  } // End Switch
}




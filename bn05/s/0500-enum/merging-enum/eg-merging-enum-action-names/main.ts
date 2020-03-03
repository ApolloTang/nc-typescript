
// file: main.ts

import {
  appActionNames,
  TappActionNames
} from  './action-names'


// =======
//  usage
// =======

// const actionType:TappActionNames = appActionNames.pageA_todos_add  // <--- doesn't work
const actionType = appActionNames.pageB_todos_add as TappActionNames  // <--- works

switch (actionType) {
  case appActionNames.pageA_todos_add: {
    type T = typeof actionType
    console.log('is pageA_todos_add')
    break
  }
  case appActionNames.pageA_todos_delete: {
    type T = typeof actionType
    console.log('is pageA_todos_delete')
    break
  }
  default:
    break
}


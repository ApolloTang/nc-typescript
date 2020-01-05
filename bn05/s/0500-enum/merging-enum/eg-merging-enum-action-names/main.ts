
// file: main.ts

import {
  appActionNames,
  TappActionNames
} from  './action-names'


// =======
//  usage
// =======

const actionType:TappActionNames = appActionNames.pageA_todos_add as TappActionNames
// const actionType = appActionNames.pageB_todos_add as TappActionNames

switch (actionType) {
  case appActionNames.pageA_todos_add: {
    type T = typeof actionType
    console.log('is pageA_todos_add')
    break
  }
  case appActionNames.pageB_todos_add: {
    type T = typeof actionType
    console.log('is pageB_todos_add')
    break
  }
  default:
    break
}


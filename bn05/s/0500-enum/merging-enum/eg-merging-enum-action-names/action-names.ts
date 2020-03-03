
// file: action-names.ts

// Ref:
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript

import {pageA_actionNames} from  './page-a-action-names'
import {pageB_actionNames} from  './page-b-action-names'

const appActionNames = {
  ...pageA_actionNames,
  ...pageB_actionNames,
}

// type TappActionNames = (typeof pageB_actionNames) & (typeof pageA_actionNames) // <-- does not work
// type TappActionNames = typeof appActionNames               // <---does not work
type TappActionNames = pageB_actionNames | pageA_actionNames  // <---works


export {
  appActionNames,
  TappActionNames
}


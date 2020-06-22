
// Enum
// https://www.tutorialsteacher.com/typescript/typescript-enum

// Numeric Enum
  enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }

  console.log(PrintMedia)
    // {
    //   '1': 'Newspaper',
    //   '2': 'Newsletter',
    //   '3': 'Magazine',
    //   '4': 'Book',
    //   Newspaper: 1,
    //   Newsletter: 2,
    //   Magazine: 3,
    //   Book: 4
    // }

  // Reverse mapping
console.log('reverse mapping: ',  PrintMedia[3]) // 'Magazine'



function getMedia(mediaName:string):PrintMedia {
  if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
    return PrintMedia.Magazine
  }
  return PrintMedia.Book
}
console.log(getMedia('Forbes')) // 3
console.log(getMedia('Forbes') === PrintMedia.Magazine) // true


export {}



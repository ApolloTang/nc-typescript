
  // Enum
  // https://www.tutorialsteacher.com/typescript/typescript-enum


  // String Enum
  enum PrintMedia {
    Newspaper = 'NEWSPAPER',
    Newsletter = 'NEWSLETTER',
    Magazine = 'MAGAZINE',
    Book = 'BOOK'
  }

  console.log(PrintMedia)
    // {
    //   Newspaper: 'NEWSPAPER',
    //   Newsletter: 'NEWSLETTER',
    //   Magazine: 'MAGAZINE',
    //   Book: 'BOOK'
    // }

  // Reverse mapping not available in String Enum
  console.log('reverse mapping: ',  PrintMedia['MAGAZINE']) // undefined
                    // TS Error                ^^^^^^^^^^^^
                    // Property 'MAGAZINE' does not exist on
                    // type 'typeof PrintMedia'.
                    // Did you mean 'Magazine'?


  function getMedia(mediaName:string):PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
      return PrintMedia.Magazine
    }
    return PrintMedia.Book
  }
  console.log(getMedia('Forbes')) // "MAGAZINE"
  console.log(getMedia('Forbes') === PrintMedia.Magazine) // true


export {}






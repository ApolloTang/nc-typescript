const myInput = document.createElement('input')
myInput.id = 'my-input'
document.body.appendChild(myInput)


// the following fail type check
function fail() {
  const inputElement = document.getElementById('my-input')

  inputElement.addEventListener('input', event=>{
    console.log(event.currentTarget.value)
  })
}
fail()

// the following pass type check
function passed() {

  const inputElement = document.getElementById('my-input') as HTMLInputElement

  inputElement.addEventListener('input', event=>{
    const i = event.currentTarget as HTMLInputElement
    console.log('case2: ', i.value)
  })
}
passed()


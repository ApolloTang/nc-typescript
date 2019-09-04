
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet // Error, Object is possibly null
  }
  name = name || 'Bob'
  return postfix('great')
}


function fixed(name: string | null): string {
  const _name = name || 'Bob'
  function postfix(epithet: string) {
    return _name.charAt(0) + '.  the ' + epithet
  }
  return postfix('great')
}



// && AND 
// || OR
// false (literal)
//FALSY values: string vazia, 0, null, undefined, NaN

console.log('Paulo' && 0 && 'Maria')
console.log('Paulo' && 'Maria')
console.log('Paulo' && '' && 'José')
console.log('Paulo' && undefined && 'José')

console.log('Paulo' && 'Carlos' && 'undefined')

function falaOi(){
  return 'Oi!'
}

const vaiExecutar = true 
// const vaiExecutar = false 
// let vaiExecutar  
console.log(vaiExecutar && falaOi())

//OR precisa que apanas uma condição seja verdadeira
console.log(0 || false || null || 'Paulo' || true)

// const corUser = null;
const corUser = 'green';
const corPadrao = corUser || 'red' 

console.log(corPadrao);

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || b || c || d || e)
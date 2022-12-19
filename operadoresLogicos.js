// && AND
// || OR
// ! NOT

const dinheiroNaConta = true
const solLaFora = false

console.log(dinheiroNaConta && solLaFora)
console.log(dinheiroNaConta || solLaFora)
console.log(dinheiroNaConta && !solLaFora)

const usuario = 'Paulo'
const senha = 123456

const vaiLogar = usuario === 'Paulo' && senha === '123456'
const vaiLogar1 = usuario === 'Paulo' || senha === '123456'
const vaiLogar2 = usuario === 'Paulo' && senha === 123456
console.log('vaiLogar:', vaiLogar)
console.log('vaiLogar1:', vaiLogar1)
console.log('vaiLogar2:', vaiLogar2)

console.log(!!true)
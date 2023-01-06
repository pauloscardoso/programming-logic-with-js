const paragraph = document.querySelector('.paragraph');
const ps = paragraph.querySelectorAll('p') 

const bodyStyles = getComputedStyle(document.body)
const backgroundColorBody = bodyStyles.backgroundColor
console.log(backgroundColorBody)

for (let p of ps){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'red'
}
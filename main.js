let button2 = document.querySelector('.button2')
let button = document.querySelector('.button')
let img = document.querySelector('img')
let item = document.querySelector('.item')
let h1 = document.querySelector('.h1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let p2 = document.querySelector('.p2')
let w = document.querySelector('.w')

let src = './img/mbp14-silver-select-202110 1.png'
let src1 = './img/mbp14-spacegray-select-202110 1.png'

button2.addEventListener('click', () => {
    // console.log('click');
    button2.style.background = '#0071E3'
    button.style.background = '#CFE7FF'
    img.setAttribute('src', src)
    p2.style.color = '#fff'
    w.innerHTML = 'Space Gray'
})

button.addEventListener('click', () =>{
    button.style.background = '#0071E3'
    button2.style.background = '#CFE7FF'
    img.setAttribute('src', src1)
    p2.style.color = '#797979'
    w.innerHTML = 'White'
})

item.addEventListener('click', () => {
    h1.innerHTML = '$1,999'
    // console.log(h1);
    item.style.borderColor = '#007FFF'
    item2.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})

item2.addEventListener('click', () => {
    h1.innerHTML = '$2,199'
    // console.log(h1);
    item2.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})

item3.addEventListener('click', () => {
    h1.innerHTML = '$2,599'
    item3.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item2.style.borderColor = '#CFE7FF'
    item4.style.borderColor = '#CFE7FF'
})
item4.addEventListener('click', () => {
    h1.innerHTML = '$3,199'
    item4.style.borderColor = '#007FFF'
    item.style.borderColor = '#CFE7FF'
    item2.style.borderColor = '#CFE7FF'
    item3.style.borderColor = '#CFE7FF'
})
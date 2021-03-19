const header = document.querySelector('.header')
const form = document.querySelector('.form')
const table = document.querySelector('.table')

header.addEventListener('click', function(){
    form.classList.toggle('slide')
    table.classList.toggle('slide')
    header.classList.toggle('slide')
})


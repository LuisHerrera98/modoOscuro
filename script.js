 const cajaBoton = document.querySelector('.boton')
 const circulo = document.querySelector('.circulo')
 const body = document.querySelector('body')
 const header = document.querySelector('div')
 const li = document.querySelectorAll('li')
 
 cajaBoton.addEventListener('click',()=>{
     TransitionEvent = 2000
     cajaBoton.classList.toggle('boton2')
     circulo.classList.toggle('circulo2')
     body.classList.toggle('dark')
     header.classList.toggle('header2')
     li.classList.toggle('li-dark')
 })

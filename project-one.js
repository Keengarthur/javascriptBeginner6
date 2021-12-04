let btnOverlay  =  document.querySelector('.btn-overlay')
let btnModal =  document.querySelector('.mobile')
let overlay = document.querySelector('.modal-overlay')

btnOverlay.addEventListener('click',()=>{
overlay.style.zIndex = 1
})

btnModal.addEventListener('click',()=>{
    overlay.style.zIndex= -1
})
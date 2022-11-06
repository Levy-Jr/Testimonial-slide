const prev = document.querySelectorAll('[data-prev-button]')
const next = document.querySelectorAll('[data-next-button')
const slides = document.querySelectorAll('[data-slide]')

let index = 0;

const display = (index) => {
  slides.forEach(slide => {
    slide.style.display = 'none'
  })
  slides[index].style.display = 'block'
}

display(index)

prev.forEach(e => {
  e.addEventListener('click', () => {
    index--
    if(index < 0){
      index = slides.length - 1
    }
    display(index)
  })
})

next.forEach(e => {
  e.addEventListener('click', () => {
    index++
    if(index > slides.length - 1){
      index = 0
    }
    display(index)
  })
})

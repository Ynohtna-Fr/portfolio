const comedianImg = document.querySelector('#comedian-img')
const mesImg = document.querySelector('#mes-img')

document.querySelector('#comedian').addEventListener('mouseover', (e) => {
  if (mesImg.classList.contains('active')) {
    mesImg.classList.remove('active')
  }
  comedianImg.classList.add('active')
})
document.querySelector('#mes').addEventListener('mouseover', (e) => {
  if (comedianImg.classList.contains('active')) {
    comedianImg.classList.remove('active')
  }
  mesImg.classList.add('active')
})


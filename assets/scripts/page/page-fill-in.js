
const store = require('../store')
const generateProjectCarouselTemplate = require('../templates/project-carousel.handlebars')
const generateIconsCarouselTemplate = require('../templates/icons-carousel.handlebars')

const addBackgroundImagesToStore = () => {
  console.log('applyBackgroundImageToStore')

  // number of backgrounds images in images/backgrounds
  // must change if add/remove backgrounds
  const backgrounds = 8

  for (let i = 1; i < backgrounds; i++) {
    store.backgroundImages.push(`public/images/backgrounds/background-${i}.jpg`)
  }
}

const addProjectCarousels = () => {
  console.log('addProjectCarousels')

  // delete below line after project 4 complete
  const carousels = store.carousels.slice(0, 4)

  // replace below slice with just store after project 4 complete
  // const carousels = store.carousels
  $('#projects-container').append(generateProjectCarouselTemplate({carousels}))
  carousels.forEach((carousel, index) => {
    console.log(carousel.title)
    $(`#project-${index}-carousel:hover::before`).css('content', `${carousel.title}`)
    $(`#project-${index}-carousel`).carousel({interval: 500 * index + 5000})
  })
}

const addIconsCarousel = () => {
  console.log('addIconsCarousel')
  const icons = store.icons
  $('#skills-container').append(generateIconsCarouselTemplate({icons}))
}

const addAbout = () => {
  console.log('addAbout')
  $('#about-container').append(store.about)
}

const onPageLoad = () => {
  console.log('onPageLoad/images')
  addBackgroundImagesToStore()
  addProjectCarousels()
  addIconsCarousel()
  addAbout()
}

module.exports = {
  onPageLoad
}

const store = require('../store')
const moment = require('moment')

const easeInBackgroundImage = () => {
  // console.log('easeInBackgroundImage')
  const index = Math.random() * store.backgroundImages.length | 0

  // if same image then call function until its different
  if (index === $('#background-image').data('image-id')) { easeInBackgroundImage() }

  const image = store.backgroundImages[index]
  $('#background-image').replaceWith(`<img id="background-image" data-image-id=${index} src=${image} alt="" style="opacity: 0"></img>`)
  $('#background-image').animate({opacity: 1}, 1000)
}

const easeOutBackgroundImage = () => {
  // console.log('easeOutBackgroundImage')
  $('#background-image').animate({opacity: 0}, 1000)
}

const cycleBackgroundImage = () => {
  // console.log('cycleBackgroundImage')
  setInterval(() => {
    easeOutBackgroundImage()
    setTimeout(() => { easeInBackgroundImage() }, 1000)
  }, 10000)
}

const createClock = () => { $('#clock').html(moment().format('h:mm:ss A')) }
const updateClock = () => {
  setInterval(() => { createClock(); updateClockText() }, 250)
}

const updateClockText = () => {
  // console.log('updateClockText')
  const time = moment().format('HH:mm:ss A').substring(0, 2)

  if (Number(time) > 6) { $('#clock-text').text('Welcome visitor, Good Morning!') }
  if (Number(time) > 12) { $('#clock-text').text('Welcome visitor, Good Afternoon!') }
  if (Number(time) > 18) { $('#clock-text').text('Welcome visitor, Good Evening!') }
}

const onPageLoad = () => {
  console.log('onPageLoad/view')
  easeInBackgroundImage()
  cycleBackgroundImage()
  updateClock()
}

module.exports = {
  onPageLoad
}

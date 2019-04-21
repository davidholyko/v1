const store = require('../store')
const setupCarousels = require('./carousels-info')
const setupIcons = require('./icons-info')
const setupAbout = require('./about-me')
const setupCode = require('./code')

const initializeStore = () => {
  console.log('initializeStore')
  store.backgroundImages = []
  store.pageLocations = []
  store.pagePositions = []
  store.carousels = []
  store.icons = []
  store.about = ''
  store.code = ''
}

const setupPageLocations = () => {
  console.log('setupPageLocations')
  store.pageLocations.push('background-image-container')
  store.pageLocations.push('about-page')
  store.pageLocations.push('skills-page')
  store.pageLocations.push('projects-page')
  store.pageLocations.push('code-page')
  store.pageLocations.push('resume-page')
  store.pageLocations.push('contact-page')
}

const calculatePagePositions = () => {
  store.pagePositions.push($('#about-page').position().top)
  store.pagePositions.push($('#skills-page').position().top)
  store.pagePositions.push($('#projects-page').position().top)
  store.pagePositions.push($('#code-page').position().top)
  store.pagePositions.push($('#resume-page').position().top)
  store.pagePositions.push($('#contact-page').position().top)
}

const onPageLoad = () => {
  console.log('onPageLoad/store-actions')
  initializeStore()

  setupPageLocations()
  setupIcons()
  setupCarousels()
  setupAbout()
  setupCode()

  calculatePagePositions()
}

module.exports = {
  onPageLoad
}

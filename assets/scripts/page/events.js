const store = require('../store')

const fadeElements = () => {
  if ($(window).scrollTop()) {
    $('#navbar').fadeIn()
    $('#scroll-up-button').fadeIn()
    $('#scroll-down-button').fadeIn()
  } else {
    $('#navbar').fadeOut()
    $('#scroll-up-button').fadeOut()
    $('#scroll-down-button').fadeOut()
  }
}

const scrollTo = (name, page = '-page') => {
  $('html,body').animate({scrollTop: $(`#${name}${page}`).offset().top + 50}, 250)
}

const onClickAbout = () => { scrollTo('about') }
const onClickSkills = () => { scrollTo('skills') }
const onClickProjects = () => { scrollTo('projects') }
const onClickCode = () => { scrollTo('code') }
const onClickResume = () => { scrollTo('resume') }
const onClickContact = () => { scrollTo('contact') }

const scrollToTop = () => { $('html, body').animate({ scrollTop: '0' }, 250) }

const onClickScrollUp = () => {
  const currentLocation = store.pageLocations[Number($('.highlight').data('id'))]
  if (!currentLocation) { return scrollToTop() }
  if ($('.highlight').data('id').toString() === '0') { return scrollToTop() }
  scrollTo(store.pageLocations[$('.highlight').data('id')], '')
}
const onClickScrollDown = () => {
  if ($('.highlight').data('id') === undefined) { return scrollTo('about') }
  if (store.pageLocations[Number($('.highlight').data('id')) + 2] === undefined) { return }
  scrollTo(store.pageLocations[Number($('.highlight').data('id')) + 2], '')
}

const highlightNavItems = () => {
  $('.page').each(function () {
    if ($(window).scrollTop() >= $(this).offset().top) {
      const id = $(this).data('id')
      $('.link').removeClass('highlight')
      $(`.link-${id}`).addClass('highlight')
    }

    if ($(window).scrollTop() <= $('#about-page').offset().top) {
      $('.link').removeClass('highlight')
    }
  })
}

const addCarouselToModalClick = () => {
  console.log('addCarouselToModalClick')
  store.carousels.forEach((item, index) => {
    $(`#project-${index}-carousel`).on('click', () => $(`#project-${index}-modal`).modal('show'))
  })
}

const addHandlers = () => {
  // nav buttons
  $('#link-about-page').on('click', onClickAbout)
  $('#link-skills-page').on('click', onClickSkills)
  $('#link-projects-page').on('click', onClickProjects)
  $('#link-resume-page').on('click', onClickResume)
  $('#link-code-page').on('click', onClickCode)
  $('#link-contact-page').on('click', onClickContact)

  // scroll buttons
  $('#scroll-up-button').on('click', onClickScrollUp)
  $('#scroll-down-button').on('click', onClickScrollDown)

  // on-scroll stuff
  $(window).on('scroll', fadeElements)
  $(window).on('scroll', highlightNavItems)

  // hover stuff
  $('body').tooltip({ selector: '[data-toggle="tooltip"]', trigger: 'hover' })

  // modal generation stuff
  addCarouselToModalClick()
}

module.exports = {
  addHandlers
}

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

const storeActions = require('./client-side/store-actions')
const animation = require('./view/animation')
const pageFillIn = require('./page/page-fill-in')
const pageEvents = require('./page/events')

$(() => {
  console.log('JavaScript is running...')
  storeActions.onPageLoad()
  pageFillIn.onPageLoad()
  animation.onPageLoad()
  pageEvents.addHandlers()
})

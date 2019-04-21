const store = require('../store')

const setupCarousels = () => {
  console.log('setupCarousels')
  store.carousels = [
    {
      id: 0,
      github: 'https://github.com/davidholyko/dko-memory-game',
      live: 'https://davidholyko.github.io/dko-memory-game',
      title: 'Memory Card Game',
      description: `  Skills used include: JavaScript, jQuery, Bootstrap, HTML, CSS, Express.js, Chart.js, Math.js, MongoDB. Envisioned a responsive user-friendly game that helps people think faster the more play Implemented a Procedural Generation Algorithm that produces multiple choice logic Generated code efficiencies by capitalizing on Node packages, such as Math.js and Chart.js Mapped the relationship resources for MVC [Model View Controller] using Ruby on Rails Authored custom routes and serializations`},
    {
      id: 1,
      github: 'https://github.com/davidholyko/dko-tic-tac-toe-client',
      live: 'https://davidholyko.github.io/dko-tic-tac-toe-client',
      title: 'Tic-Tac-Toe Game',
      description: `Skills used include: JavaScript, jQuery, Bootstrap, HTML, CSS, Ajax, Ruby, Ruby on Rails, Highlight.js. Refactored game logic to utilize recursion and dynamic programming ideas. Includes a demonstration of how the recursive algorithm works. Developed layout to add scalability to the web application.Implemented Responsive-Design and Mobile-Design ideas`},
    {
      id: 2,
      github: 'https://github.com/davidholyko/dko-brain-age-front-end',
      live: 'https://davidholyko.github.io/dko-brain-age-front-end',
      title: 'Brain Age Game',
      description: `Skills used include: JavaScript, jQuery, Bootstrap, HTML, CSS, Express.js, Chart.js, Math.js, MongoDB. Envisioned a responsive user-friendly game that helps people think faster the more play. Implemented a Procedural Generation Algorithm that produces multiple choice logic. Generated code efficiencies by capitalizing on Node packages, such as Math.js and Chart.js. Mapped the relationship resources for MVC [Model View Controller] using Ruby on Rails. Authored custom routes and serializations`},
    {
      id: 3,
      github: 'https://github.com/davidholyko/mdhs-blog-frontend',
      live: 'https://m-d-h-s.github.io/mdhs-blog-frontend',
      title: 'LetterBox: A Blog for Cat People',
      description: `Skills used include: JavaScript, jQuery, Handlebars, Bootstrap, HTML, CSS, Express.js, Chart.js, Math.js, MongoDB. Envisioned a responsive user-friendly blogsite that allows users to Create, Read, Update, and Delete owned resources. Coordinated with team to plan wireframes and entity relationship diagrams for the project. Engineered Handlebars template for dynamic HTML generation. Consolidated code into reducable and modular bits for future improvement`},
    {
      id: 4,
      github: 'https://github.com/davidholyko/dko-memory-game',
      live: 'https://davidholyko.github.io/dko-memory-game/',
      title: 'Learn Vim Game',
      description: `OVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOW OVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOW OVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOW`}]
}

module.exports = setupCarousels

const store = require('../store')

const setupIcons = () => {
  console.log('setupIcons')
  store.icons = [
    {
      link: 'public/images/icons/javascript.png',
      title: 'javascript',
      type: 'language'
    },
    {
      link: 'public/images/icons/ruby.png',
      title: 'ruby',
      type: 'language'
    },
    {
      link: 'public/images/icons/html.png',
      title: 'html',
      type: 'language'
    },
    {
      link: 'public/images/icons/css.png',
      title: 'css',
      type: 'language'
    },
    {
      link: 'public/images/icons/python.png',
      title: 'python',
      type: 'language'
    },
    {
      link: 'public/images/icons/sql.png',
      title: 'sql',
      type: 'language'
    },
    {
      link: 'public/images/icons/java.png',
      title: 'java',
      type: 'language'
    },
    {
      link: 'public/images/icons/vba.png',
      title: 'vba',
      type: 'language'
    },
    {
      link: 'public/images/icons/jquery.png',
      title: 'jquery',
      type: 'library'
    },
    {
      link: 'public/images/icons/scss.png',
      title: 'scss',
      type: 'library'
    },
    {
      link: 'public/images/icons/bootstrap.png',
      title: 'bootstrap',
      type: 'library'
    },
    {
      link: 'public/images/icons/react.png',
      title: 'react',
      type: 'library'
    },
    {
      link: 'public/images/icons/express.png',
      title: 'express',
      type: 'library'
    },
    {
      link: 'public/images/icons/rails.png',
      title: 'rails',
      type: 'library'
    },
    {
      link: 'public/images/icons/handlebars.png',
      title: 'handlebars',
      type: 'library'
    },
    {
      link: 'public/images/icons/vim.png',
      title: 'vim',
      type: 'technology'
    },
    {
      link: 'public/images/icons/node.png',
      title: 'node',
      type: 'technology'
    },
    {
      link: 'public/images/icons/postgresql.png',
      title: 'postgresql',
      type: 'technology'
    },
    {
      link: 'public/images/icons/atom.png',
      title: 'atom',
      type: 'technology'
    },
    {
      link: 'public/images/icons/grunt.png',
      title: 'grunt',
      type: 'technology'
    },
    {
      link: 'public/images/icons/github.png',
      title: 'github',
      type: 'technology'
    }
  ]
}

module.exports = setupIcons

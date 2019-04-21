// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const parseIcon = (icon, type) => icon.type === type ? '' : 'd-none'

module.exports = parseIcon

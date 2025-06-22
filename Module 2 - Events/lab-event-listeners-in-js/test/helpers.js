// Helpers for setting up the testing environment
global.TextEncoder = require("util").TextEncoder
global.TextDecoder = require("util").TextDecoder

const { JSDOM } = require('jsdom')
const fs = require('fs')

const html = fs.readFileSync('./index.html', 'utf8')

const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' })
const { window } = dom
const { document } = window

global.document = document
global.window = window
global.HTMLElement = window.HTMLElement
global.Event = window.Event
global.KeyboardEvent = window.KeyboardEvent

module.exports = {
  document: window.document,
  window,
  Event: window.Event,
  KeyboardEvent: window.KeyboardEvent,
}
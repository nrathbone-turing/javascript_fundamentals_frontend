const { document } = require('./helpers')
const { expect } = require('chai')

// Sample test suite for JavaScript event handling
describe('Handling Events with JavaScript', () => {
  let dodger

  before(() => {
    dodger = document.getElementById('dodger')
  })

  it('should select the dodger element', () => {
    expect(dodger).to.not.be.null
  })

  it('should move the dodger left when the left arrow key is pressed', () => {
    // Simulate left arrow key press
    const event = new dom.window.KeyboardEvent('keydown', { key: 'ArrowLeft' })
    document.dispatchEvent(event)

    // Check if the dodger's left position has been updated
    const left = parseInt(dodger.style.left.replace('px', ''), 10)
    expect(left).to.be.lessThan(180)
  })

  it('should move the dodger right when the right arrow key is pressed', () => {
    // Simulate right arrow key press
    const event = new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight' })
    document.dispatchEvent(event)

    // Check if the dodger's left position has been updated
    const left = parseInt(dodger.style.left.replace('px', ''), 10)
    expect(left).to.be.greaterThan(180)
  })
})

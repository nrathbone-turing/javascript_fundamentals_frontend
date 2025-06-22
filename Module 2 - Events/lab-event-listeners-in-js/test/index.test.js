
const { document, window, Event, KeyboardEvent } = require('./helpers')
const {
  displayKeyPress,
  displayUserInput,
} = require('../index.js')

// Sample test suite for JavaScript event handling
describe('Handling Events with JavaScript', () => {
  let changeColorButton
  let resetColorButton
  let textInput
  let keyPressDisplay
  let textInputDisplay

  beforeEach (() => {
    changeColorButton = document.getElementById('changeColorButton')
    resetColorButton = document.getElementById('resetColorButton')
    textInput = document.getElementById('textInput')
    keyPressDisplay = document.getElementById('keyPressDisplay')
    textInputDisplay = document.getElementById('textInputDisplay')

    document.addEventListener('keydown', require('../index.js').displayKeyPress)
    textInput.addEventListener('input', require('../index.js').displayUserInput)
  })

  it('should select the changeColorButton element', () => {
    expect(changeColorButton).not.toBeNull()
  })

  it('should select the resetColorButton element', () => {
    expect(resetColorButton).not.toBeNull()
  })

  it('should select the textInput element', () => {
    expect(textInput).not.toBeNull()
  })

  it('should display the key pressed by the user', () => {
      // Simulate key press
      const event = new KeyboardEvent('keydown', { key: 'A' })
      document.dispatchEvent(event)

      // Check if the keyPressDisplay has been updated
      setTimeout(() => {
          expect(keyPressDisplay.textContent).toMatch('A');
          done();
      }, 0);
  })

  it('should display user input in real-time', () => {
      // Simulate user input
      textInput.value = 'Hello'
      const event = new Event('input')
      textInput.dispatchEvent(event)

      // Check if the textInputDisplay has been updated
      setTimeout(() => {
          expect(textInputDisplay.textContent).toMatch('Hello');
          done();
      }, 0);
    })
})

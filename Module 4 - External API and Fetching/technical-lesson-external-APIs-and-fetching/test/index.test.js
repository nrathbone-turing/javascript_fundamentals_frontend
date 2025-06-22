const { document } = require('./helpers.js')

const { displayAstronauts } = require('../index.js')

// Sample test suite for fetching and displaying astronaut data
describe('Fetching and Displaying Astronaut Data', () => {
  let astronautList

  beforeEach(() => {
    astronautList = document.getElementById('astronaut-list')
    astronautList.innerHTML = '' // Clear between tests
  })

  it('should select the astronaut-list element', () => {
      expect(astronautList).not.toBeNull()
  })

  it('should fetch and display astronaut data', () => {
      // Simulate fetching data from the API
      const mockData = {
          people: [
              { name: 'Chris Hadfield' },
              { name: 'Peggy Whitson' },
          ]
      }
      displayAstronauts(mockData)
          
      // Check if the astronautList has been updated
      const listItems = astronautList.querySelectorAll('li')
      expect(listItems.length).toBe(2)
      expect(listItems[0].textContent).toBe('Chris Hadfield')
      expect(listItems[1].textContent).toBe('Peggy Whitson')
  })
})

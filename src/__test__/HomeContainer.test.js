import { render } from '../test-utils'
import { screen } from '@testing-library/react'
import HomeContainer from '../containers/Home/HomeContainer'

window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe('Test homepage components', () => {
  test('should contain container attr', async () => {
    render(<HomeContainer />)
    expect(screen.getByTestId('container')).toBeVisible()
  })
  
  test('should contain post-list attr', async () => {
    render(<HomeContainer />)
    expect(screen.getByTestId('post-list')).toBeInTheDocument()
  })

})

describe('Testing mock service worker', () => {
  test('should contain post-item attr and match some value', async () => {
    render(<HomeContainer />)
    expect(screen.getByTestId('post-item')).toBeVisible()
    expect(await screen.findByText('cara masak ayam')).toBeInTheDocument()
    expect(screen.getByText(/bersihkan ayam/i)).toBeInTheDocument()
  })

})


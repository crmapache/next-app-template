import { render, screen } from '@utils'
import { HomePage } from '@components/features'

describe('Home Page', () => {
  it('should render Home Page', () => {
    render(<HomePage />)
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})

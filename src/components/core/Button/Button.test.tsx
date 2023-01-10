import { render, screen } from '@utils'

import { Button } from './'

describe('Button', () => {
  it('should render button', function () {
    render(<Button />)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})

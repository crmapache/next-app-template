import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'

import { defaultTheme } from '@styles/defaultTheme'
import { GlobalStyle } from '@styles/globalStyles'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

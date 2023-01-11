import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { defaultTheme } from '@styles/defaultTheme'
import { GlobalStyle } from '@styles/globalStyles'
import { store } from '@store'

const queryClient = new QueryClient()

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

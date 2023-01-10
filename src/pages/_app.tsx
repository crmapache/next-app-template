import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@styles/defaultTheme'
import { GlobalStyle } from '@styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

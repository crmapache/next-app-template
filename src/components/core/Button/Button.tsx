import styled from 'styled-components'

import { useStyles } from './Button.styles'

const StyledButton = styled.button`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.red};
`

export const Button = () => {
  const styles = useStyles()

  return <StyledButton>Button</StyledButton>
}

import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.gold};
  border: none;
  padding: 8px 30px;
`

export const Button = ({ children }) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
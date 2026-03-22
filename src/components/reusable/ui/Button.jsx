import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.gold};
  border: none;
  display: flex;
  justify-self: center;
  


  ${({ $variant }) => $variant === "card" && `
    padding: 8px 30px;
    width: max-content;
    margin-top: 50px;
    align-self: center;
  `}
`

export const Button = ({ text, variant }) => {
  return (
    <StyledButton $variant={variant}>{text}</StyledButton>
  )
}
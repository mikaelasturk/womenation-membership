import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 20px;
  border: none;
  display: flex;
  justify-self: center;
  padding: 8px 30px;


  ${({ $variant, theme }) => $variant === "card" && `
    width: max-content;
    margin-top: 50px;
    align-self: center;
    background: ${theme.omMedlemskap.buttons.väljMedlemskap.bgClr};
  `}

  ${({ $variant, theme }) => $variant === "omMedlemskap-login" && `
    background: ${theme.omMedlemskap.buttons.loggaIn.bgClr};
    
  `}

  ${({ $variant, theme }) => $variant === "loggaIn-login" && `
    background: ${theme.loggaIn.buttons.loggaIn.bgClr};
  `}
`

export const Button = ({ text, variant }) => {
  return (
    <StyledButton $variant={variant}>{text}</StyledButton>
  )
}
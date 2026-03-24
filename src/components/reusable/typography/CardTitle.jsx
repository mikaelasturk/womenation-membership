import styled from 'styled-components'

const StyledCardTitle = styled.h2`
  margin: 0;
`

export const CardTitle = ({ text }) => {
  return (
    <StyledCardTitle>
      {text}
    </StyledCardTitle>
  )
}


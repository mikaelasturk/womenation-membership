import styled from 'styled-components'

const StyledCardTitle = styled.h2`

`

export const CardTitle = ({ text }) => {
  return (
    <StyledCardTitle>
      {text}
    </StyledCardTitle>
  )
}


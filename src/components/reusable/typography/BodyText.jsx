// [ ] TODO make prop for variants for all typography 

import styled from 'styled-components'

const StyledBodyText = styled.p`

`

export const BodyText = ({ text }) => {
  return (
    <StyledBodyText>
      {text}
    </StyledBodyText>
  )
}


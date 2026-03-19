import styled from 'styled-components'

const StyledPageTitle = styled.h1`

`

export const PageTitle = ({ text }) => {
  return (
    <StyledPageTitle>
      {text}
    </StyledPageTitle>
  )
}


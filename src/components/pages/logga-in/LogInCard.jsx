// [ ] TODO make button for going back to the membership page. 

import styled from 'styled-components'
import { Button } from '../reusable/ui/Button'
import { BodyText, CardTitle } from '../components/reusable/typography/typography'
import { useContentStore } from '../store/contentStore'

const StyledLogInCard = styled.div`

`

export const LogInCard = () => {
  const { logInContent } = useContentStore()
  const { heading, description } = logInContent

  return (
    <StyledLogInCard >  
      <CardTitle text={heading} />
      <BodyText text={description} />
      <Button text="Gå tillbaka" /> 
    </StyledLogInCard>
  )
}


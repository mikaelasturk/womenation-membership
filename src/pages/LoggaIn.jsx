// [x] Connect to contentStore

import styled from 'styled-components'
import { useContentStore } from '../store/contentStore'
import { PageTitle, BodyText } from '../components/reusable/typography/typography'
import { LogInCard } from '../components/pages/logga-in/LogInCard'
import { Button } from "../components/reusable/ui/Button"

const StyledLoggaIn = styled.div`

`

export const LoggaIn = () => {
  const { logInContent } = useContentStore()
  const { heading, description } = logInContent

  return (
      <StyledLoggaIn>
      <Button text="Gå tillbaka" /> 
      <PageTitle text={heading} />
      <BodyText text={description} />
      <LogInCard />
     </StyledLoggaIn>
   )
}


// [x] TODO make button for going back to the membership page. 

import styled from 'styled-components'
import { Button } from '../../reusable/ui/Button'
import { BodyText, CardTitle } from '../../reusable/typography/typography'
import { useContentStore } from '../../../store/contentStore'
import { LogInForm } from "./LogInForm"

const StyledLogInCard = styled.div`
  background: ${({theme}) => theme.loggaIn.form.bgClr};
  color: ${({theme}) => theme.loggaIn.form.txtClr};
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-self: center;
  padding: 80px 40px;
  margin-top: 60px;
  border-radius: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 50%;
    max-width: 450px;
  }
`

const StyledTextContainer = styled.div`

`

export const LogInCard = () => {
  const { logInContent } = useContentStore()
  const { heading, text , signUp} = logInContent

  return (
    <StyledLogInCard >
      <StyledTextContainer>
        <CardTitle text={heading} />
        <BodyText text={text} />
      </StyledTextContainer>
      <LogInForm />
      <BodyText text={signUp}/>
    </StyledLogInCard>
  )
}


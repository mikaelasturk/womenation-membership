// [x] TODO Make variant for text and button text and pass them as props to the component.

// [x] TODO Make json from the data and map through it to create the cards instead of hardcoding them. (content store used instead))

// [x] TODO Make the Button reusable, without hardcoded text. so it can be used for login button and not just for the membership card.

import styled from "styled-components"
import { Button } from "../../reusable/ui/Button"
import { BodyText, CardTitle } from "../../reusable/typography/typography"
import { useContentStore } from "../../../store/contentStore"

const StyledCard = styled.div`
  background: ${({ theme }) => theme.omMedlemskap.cards.bgClr};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;


  @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
    width: 70%;
    max-width: 250px;
    height: 500px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    width: 80%;
    max-width: 300px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 80%;
    max-width: 300px;
  }
`
const StyledTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  color: ${({theme}) => theme.omMedlemskap.cards.txtClr};
`

export const MembershipCard = ({ variant }) => {
  const { content } = useContentStore()

  return (
    <StyledCard>
      <StyledTextContainer>
        <BodyText text={content.cards[variant].type} />
        <CardTitle text={content.cards[variant].price} />
        <BodyText text={content.cards[variant].info}/>
      </StyledTextContainer>
      <Button text={content.buttons[variant]} variant="card" />
    </StyledCard>
  )
}



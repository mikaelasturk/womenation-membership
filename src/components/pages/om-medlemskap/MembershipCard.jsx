// [ ] TODO Make variant for text and button text and pass them as props to the component.

// [ ] TODO Make json from the data and map through it to create the cards instead of hardcoding them.

// [ ] TODO Make the Button reusable, without hardcoded text. so it can be used for login button and not just for the membership card.

import styled from "styled-components"
import { Button } from "../../reusable/ui/Button"
import { BodyText, CardTitle } from "../../reusable/typography/typography"
import { useContentStore } from "../../../store/contentStore"

const StyledCard = styled.div`
  background: ${({theme}) => theme.colors.darkPurple};
  width: 30%;
  border-radius: 10px;
  height: 500px;
  padding: 30px;
`

export const MembershipCard = ({ variant }) => {
  const { content } = useContentStore()

  return (
    <StyledCard>
      <BodyText text={content.cards[variant].type} />
      <CardTitle text={content.cards[variant].price} />
      <BodyText text={content.cards[variant].info}/>
      <Button>Välj</Button>
    </StyledCard>
  )
}


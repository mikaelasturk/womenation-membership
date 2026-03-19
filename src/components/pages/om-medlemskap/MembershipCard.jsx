// [ ] TODO Make variant for text and button text and pass them as props to the component.

// [ ] TODO Make json from the data and map through it to create the cards instead of hardcoding them.

//[ ] TODO Make the Button reusable, without hardcoded text. so it can be used for login button and not just for the membership card.

import styled from "styled-components"
import membership from "../../../data/membership.json"
import { Button } from "../../reusable/ui/Button"
import { BodyText, CardTitle } from "../../reusable/typography/typography"

const StyledCard = styled.div`
  background: ${({theme}) => theme.colors.darkPurple};
  width: 30%;
  border-radius: 10px;
  height: 500px;
  padding: 30px;
`

export const MembershipCard = ({ variant }) => {
  return (
    <>
    <StyledCard>
      <BodyText text={membership["pro-type"]}/>
      <CardTitle text={membership["pro-price"]}/>
      <BodyText text={membership["pro-info"]} $variant={variant} />
      <Button>Välj</Button>
    </StyledCard>
    <StyledCard>
      <BodyText text={membership["enterprise-type"]}/>
      <CardTitle text={membership["enterprise-price"]}/>
      <BodyText text={membership["enterprise-info"]} $variant={variant} />
      <Button>Välj</Button>
    </StyledCard>
   </> 
  )
}


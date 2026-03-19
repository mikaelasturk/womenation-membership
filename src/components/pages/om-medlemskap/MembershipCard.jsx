// [ ] TODO Make variant for text and button text and pass them as props to the component.

// [ ] TODO Make json from the data and map through it to create the cards instead of hardcoding them.

//[ ] TODO Make the Button reusable, without hardcoded text. so it can be used for login button and not just for the membership card.

//import styled from "styled-components"
import { Button } from "../../reusable/ui/Button"
import { BodyText } from "../../reusable/typography/typography"

export const MembershipCard = ({ variant }) => {
  return (
    <>
      <BodyText $variant={variant} />
      <Button>Välj</Button>
    </>
  )
}


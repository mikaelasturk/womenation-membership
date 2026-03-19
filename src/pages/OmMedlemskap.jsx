import styled from 'styled-components'
import { MembershipCard } from "../components/pages/om-medlemskap/MembershipCard"
import { useContentStore } from "../store/contentStore"
import { PageTitle, BodyText } from "../components/reusable/typography/typography"

const StyledOmMedlemskap = styled.div`

`

export const OmMedlemskap = () => {
  const { content } = useContentStore()

  return (
    <StyledOmMedlemskap>
      <PageTitle text={content.heading} />
      <BodyText text={content.text} />
      <MembershipCard variant="pro" />
      <MembershipCard variant="enterprise" />
    </StyledOmMedlemskap>
  )
}


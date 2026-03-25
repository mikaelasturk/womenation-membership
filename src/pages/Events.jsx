// import styled from 'styled-components'
import { useContentStore } from '../store/contentStore'
import { PageTitle, BodyText } from '../components/reusable/typography/typography'

// const StyledComponent = styled.div`

// `

export const Events = () => {
  const {eventContent} = useContentStore()
  const { heading, description } = eventContent

  return (
    <>  
      <PageTitle text={heading} />
      <BodyText text={description} />
    </>
  )
}


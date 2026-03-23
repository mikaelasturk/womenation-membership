// [ ] Make components for inputfields?
// [ ] Connect form to backend
// [x] Connect form to content store

import styled from 'styled-components'
import { useContentStore } from '../store/contentStore'
import { CardTitle } from '../components/reusable/typography/typography'

const StyledForm = styled.form`

`

export const ComponentTemplate = () => {
  const { logInContent } = useContentStore()
  const { heading, form  } = logInContent

  return (
    <StyledForm>
      <CardTitle text={heading} />
      <label htmlFor="email" text={form.email}> 
        <input type="email" id="email" name="email" />
      </label>
      <label htmlFor="password" text={form.password} >
        <input type="password" id="password" name="password" />
      </label>
      <Button text={form.button} />
    </StyledForm>

  )
}


// [ ] Make components for inputfields?
// [ ] Connect form to backend
// [x] Connect form to content store

import styled from 'styled-components'
import { useContentStore } from '../../../store/contentStore'
import { Button } from '../../reusable/ui/Button'
//import { CardTitle } from '../components/reusable/typography/typography'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const StyledInput = styled.input`
   background: ${({theme}) => theme.loggaIn.form.inputBgClr};
   color: ${({theme}) => theme.loggaIn.form.inputTxtClr};
   width: 100%;
   border-radius: 3px;
   border: none;
`

export const LogInForm = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent

  return (
    <StyledForm>
      {/* <label htmlFor="name" text={form.name}> 
        <StyledInput type="name" id="name" name="name" />
      </label> */}
      <label htmlFor="email" >{form.email}
        <StyledInput type="email" id="email" name="email" />
      </label>
      <label htmlFor="password">{form.password}
        <StyledInput type="password" id="password" name="password" />
      </label>
      <Button text={form.button} variant="loggaIn-login"/>
    </StyledForm>

  )
}


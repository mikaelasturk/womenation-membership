import styled from "styled-components"
import { NavLink } from "react-router"
import { Button } from "../ui/Button"
import { useContentStore } from "../../../store/contentStore"

const StyledNavbar = styled.nav`
  background: ${({theme}) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 35px 0 30px 35px;
`

const StyledItems = styled.li`
  color: ${({theme})=> theme.colors.white}
`

const StyledButtonWrapper = styled.div`
  margin: 35px 35px 30px 0;
`

export const Navbar = () => {
  const content = useContentStore((state) => state.content)

  return (
    <StyledNavbar>
      <StyledUl>
        <StyledItems>hem</StyledItems>
        <StyledItems>om oss</StyledItems>
        <StyledItems>kontakt</StyledItems>
        <StyledItems><NavLink to="/om-medlemskap">om medlemskap</NavLink></StyledItems>
      </StyledUl>
      <StyledButtonWrapper>
        <NavLink to="/login"><Button text={content.buttons.logIn} variant="omMedlemskap-login"/>
        </NavLink>
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}
import { Outlet, NavLink } from "react-router-dom"
import styled from "styled-components"

const PageWrapper = styled.div`
 display: flex;
 direction: row;
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightGrey};
  min-height: 100vh;
  width: 250px;
`

const StyledMain = styled.main`

`

export const MedlemsportalLayout = () => {
  return (
    <PageWrapper>
      <Sidebar>
        { /* [ ]  Small card for member avatar and name */ }
        <NavLink to="mina-sidor"> Mina Sidor </NavLink>
        <NavLink to="medlemskap"> Medlemskap </NavLink>
        <NavLink to="events"> Events </NavLink>
      </Sidebar>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </PageWrapper>
  )
}
import { Outlet, NavLink } from "react-router"
import styled from "styled-components"

const PageWrapper = styled.div`
 
`

const Sidebar = styled.aside`
  
`

const Content = styled.main`
  
`

export const MedlemsportalLayout = () => {
  return (
    <PageWrapper>
      <Sidebar>
        <NavLink to="/om-medlemskap/mina-sidor" text="Mina Sidor" />
        <NavLink to="/om-medlemskap/medlemskap" text="Medlemskap" />
        <NavLink to="/om-medlemskap/events" text="Events" />
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </PageWrapper>
  )
}
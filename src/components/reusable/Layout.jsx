import { Outlet } from "react-router"
import styled from "styled-components"

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {

  return (
    <StyledLayout>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  )
}
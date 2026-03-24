// [ ] Behöver Routewrapper path för att redirectas från logga in? Eller räcker det med index pathen?

import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Layout } from "./components/reusable/Layout"
import { MedlemsportalLayout } from "./layouts/layouts"
import { OmMedlemskap, LoggaIn, MinaSidor, Medlemskap, Events} from "./pages/pages"

const MedlemsportalRoute = ({ element, children }) => {

  return (
    <Route element={element}>
      {children}
    </Route>
  )
}

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={ <Navigate to="/om-medlemskap" replace />}/>
            <Route path="/om-medlemskap" element={<OmMedlemskap />}/>
            <Route path="/logga-in" element={<LoggaIn />}/>
            <Route element={<MedlemsportalLayout />}>
              <Route index path="mina-sidor" element={<MinaSidor />} />
              <Route path="medlemskap" element={<Medlemskap />} />
              <Route path="events" element={<Events />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

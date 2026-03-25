// [ ] Behöver Routewrapper path för att redirectas från logga in? Eller räcker det med index pathen?

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Layout } from "./components/reusable/Layout"
import { MedlemsportalLayout } from "./layouts/layouts"
import { OmMedlemskap, LoggaIn, MinaSidor, Medlemskap, Events, BliMedlem} from "./pages/pages"

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
            <Route path="/bli-medlem" element={<BliMedlem/>}/>
            <Route path="/konto" element={<MedlemsportalLayout />}>
              <Route index element={<h2>Välkommen till ditt konto!</h2>} />
              <Route path="mina-sidor" element={<MinaSidor />} />
              <Route path="medlemskap" element={<Medlemskap />} />
              <Route path="events" element={<Events />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

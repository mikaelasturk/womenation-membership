
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Layout } from "./components/reusable/Layout"
import { OmMedlemskap, LoggaIn } from "./pages/pages"


export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={ <Navigate to="/om-medlemskap" replace/>}/>
            <Route path="/om-medlemskap" element={<OmMedlemskap/>}/>
            <Route path="/login" element={<LoggaIn/>}/>
            {/* <Route path="/minasidor" element={<MedlemsportalLayout/>}>
              <Route index element={<div>Mina sidor</div>} />
              <Route path="/medlemskap" element={<div>Medlemskap</div>} />
              <Route path="/events" element={<div>Events</div>} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

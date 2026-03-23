import { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { OmMedlemskap, LoggaIn } from "./pages/pages"
import { BrowserRouter, Routes, Route } from "react-router"

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/om-medlemskap" element={<OmMedlemskap />}/>
            <Route path="/login" element={<LoggaIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

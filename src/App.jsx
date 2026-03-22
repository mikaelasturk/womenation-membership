import { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { OmMedlemskap } from "./pages/OmMedlemskap"

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <OmMedlemskap />
    </ThemeProvider>
  )
}

import { create } from "zustand"

const membershipContent = {
  heading: "Bli premium medlem!",
  text: "Få exklusiva rabatter och erbjudande. Förtur på eventbiljetter ...",
  cards: {
    pro: {
      type: "Pro",
      price: "100kr/mån",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    enterprise: {
      type: "Enterprise",
      price: "200kr/mån",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  buttons: {
    pro: "Välj Pro",
    enterprise: "Välj Enterprise",
    logIn: "Logga in" 
  }
}

const logInContent = {
  heading: "Logga in",
  text: "Välkommen tillbaka! Logga in för att få tillgång till ditt konto.",
  form: {
    name: "namn",
    email: "E-post",
    password: "Lösenord",
    button: "Logga in"
  },
}

const minaSidorContent = {
  heading: "Mina sidor",
  description: "Här kan du se dina medlemskap och uppdatera din information.", 
} 


export const useContentStore = create(() => ({
  content: membershipContent,
  logInContent: logInContent,
  minaSidorContent: minaSidorContent
}))

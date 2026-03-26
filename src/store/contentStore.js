import { create } from "zustand"

const membershipContent = {
  hero: "Om medlemskap",
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
// [x] Ändra i logga in komponent efter restructure 

const logInContent = {
  heading: {
    logIn: "Logga in",
    signUp: "Bli medlem",
  },
  text: {
    logIn: "Välkommen tillbaka!\nLogga in för att få tillgång till ditt konto.",
    signUp: "Skapa konto!\nfyll i din information för att få tillgång till ditt konto.",
  },
  signUp: {
    text: "Inte registrerad? Bli medlem ",
    linkText: "här",
    linkTo: "/bli-medlem"
  },
  logIn: {
    text: "Redan medlem? Logga in ",
    linkText: "här",
    linkTo: "/logga-in"
  },
  form: {
    name: "namn",
    email: "E-post",
    password: "Lösenord",
    button: {
      logIn: "Logga in",
      signUp: "Bli medlem"

    }
  },
}

const minaSidorContent = {
  heading: "Mina sidor",
  description: "Här kan du se dina medlemskap och uppdatera din information.", 
} 

const eventContent = {
  heading: "Events",
  description: "hallå",
  card: {
    image: "",
    title: "hej",
    description: ""
  }
}


export const useContentStore = create(() => ({
  content: membershipContent,
  logInContent: logInContent,
  minaSidorContent: minaSidorContent,
  eventContent: eventContent
}))

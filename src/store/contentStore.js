import { create } from "zustand"

const content = {
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
}

export const useContentStore = create(() => ({
  content,
}))

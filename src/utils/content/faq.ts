import { v4 as uuidv4 } from "uuid";
import type { FAQItemType } from "@/src/types/faq";

export const FAQItems: FAQItemType[] = [
  {
    id: uuidv4(),
    question: "Quanto custa o atendimento?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae justo vel mauris facilisis tincidunt. Integer commodo lectus ut neque posuere, nec pulvinar sapien cursus.",
  },
  {
    id: uuidv4(),
    question: "O atendimento é online mesmo? Como funciona?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, tortor vitae vulputate posuere, mauris sapien tincidunt augue, vel blandit neque nibh vitae ipsum.",
  },
  {
    id: uuidv4(),
    question: "Quanto tempo demora para desenvolver uma campanha?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sem at placerat facilisis, urna velit commodo lectus, et tincidunt sapien ligula non neque.",
  },
];

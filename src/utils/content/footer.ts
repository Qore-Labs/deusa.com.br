import { v4 as uuidv4 } from "uuid";
import type { FooterContentType } from "@/src/types/footer";

export const FooterContent: FooterContentType = {
  description:
    "Marketing Digital & Branding direcionado a profissionais da psicologia.",
  menuTitle: "Menu",
  copyright:
    "© 2026 Deusa - Marketing & Branding. Todos os direitos reservados.",
  icons: [
    { id: uuidv4(), label: "Site", icon: "globe" },
    { id: uuidv4(), label: "Mensagem", icon: "message" },
    { id: uuidv4(), label: "E-mail", icon: "mail" },
  ],
};

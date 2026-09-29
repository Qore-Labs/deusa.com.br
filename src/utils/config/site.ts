import { MenuItem } from "@/src/types/menu";
import { ISiteConfig } from "@/src/types/site";

export const SITE_CONFIG: ISiteConfig = {
    name: "Deusa Goulart",
    title: "Consultoria de Marketing para Psicólogas | Deusa Goulart",
    description: "Consultoria de marketing digital e branding para psicólogas que desejam construir uma presença profissional autêntica e fortalecer sua clínica.",
    baseUrl: "https://deusa.com.br",
    authors: {
        name: "BinaryInc Team",
        url: "https://www.binaryinc.com.br",
    },
}

export const MenuItems: MenuItem[] = [
    { label: "Consultoria", href: { hash: "#consultoria" } },
    { label: "Benefícios", href: { hash: "#beneficios" } },
    { label: "Bio", href: { hash: "#bio" } },
    { label: "FAQ", href: { hash: "#faq" } },
]

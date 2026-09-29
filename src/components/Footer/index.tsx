import Link from "next/link";
import { Container } from "@/src/components/UI/Container";
import { Icons } from "@/src/components/UI/Icons";
import { MenuItems } from "@/src/utils/config/site";
import { FooterContent } from "@/src/utils/content/footer";

const footerIcons = {
  globe: Icons.Globe,
  message: Icons.Message,
  mail: Icons.Mail,
};

export function Footer() {
  return (
    <footer className="border-t-2 border-chili-pepper-400 bg-chili-pepper-200 px-4 font-dm-sans text-brown-100 md:px-10">
      <Container>
        <div className="flex flex-col gap-10 px-6 py-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-80 flex-col items-start">
            <Icons.Logo
              width={99}
              height={36.807}
              fill="#004D62"
              aria-label="Deusa"
              role="img"
            />
            <p className="mt-4 text-base leading-6.5">
              {FooterContent.description}
            </p>
            <div className="mt-6 flex items-center gap-4" aria-label="Canais de contato">
              {FooterContent.icons.map((item) => {
                const Icon = footerIcons[item.icon];
                const content = <Icon aria-hidden="true" />;

                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-pepper-400"
                  >
                    {content}
                  </a>
                ) : (
                  <span key={item.id} role="img" aria-label={item.label}>
                    {content}
                  </span>
                );
              })}
            </div>
          </div>

          <nav aria-label="Menu do rodapé" className="min-w-32">
            <h2 className="text-sm leading-5 font-semibold">
              {FooterContent.menuTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {MenuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 transition-colors hover:text-chili-pepper-400 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-pepper-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-chili-pepper-400 py-6 text-center text-xs leading-4">
          {FooterContent.copyright}
        </div>
      </Container>
    </footer>
  );
}

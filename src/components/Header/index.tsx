import Link from "next/link";
import { Menu } from "../Menu";
import { Container } from "../UI/Container";
import { Icons } from "../UI/Icons";
import { MobileMenu } from "./MobileMenu";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className="relative z-50 flex h-20 w-full items-center bg-blue-100 bg-[url('/header/chess-texture.png')] bg-repeat-x px-4 sm:px-6 lg:px-8 xl:px-16">
      <Container className="flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Deusa - início"
          className="shrink-0 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icons.Logo
            width={126}
            height={46.85}
            fill="#F1DEAF"
            className="h-auto w-27 sm:w-31.5"
            aria-hidden="true"
          />
        </Link>
        <div className="hidden lg:block">
          <Menu />
        </div>
        <Link
          href="#whatsapp"
          className={`${styles.contactButton} hidden h-9 min-w-43.25 items-center justify-center rounded-lg bg-chili-pepper-400 px-4 text-center font-dm-sans text-sm font-semibold tracking-wide text-white lg:flex`}
        >
          Entrar em contato
        </Link>
        <MobileMenu />
      </Container>
    </header>
  );
};

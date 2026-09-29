import { MenuItems } from "@/src/utils/config/site";
import Link from "next/link";

export const Menu = ({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) => {
  return (
    <nav
      aria-label={mobile ? "Menu principal móvel" : "Menu principal"}
      className={mobile ? "flex flex-col" : "flex items-center justify-center gap-5 xl:gap-8"}
    >
      {MenuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          className={`font-dm-sans text-sm font-medium text-white transition-colors hover:text-chili-pepper-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${mobile ? "flex min-h-11 items-center border-b border-white/20" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

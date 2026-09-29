type FooterIconType = {
  id: string;
  label: string;
  icon: "globe" | "message" | "mail";
  href?: string;
};

export type FooterContentType = {
  description: string;
  menuTitle: string;
  copyright: string;
  icons: FooterIconType[];
};

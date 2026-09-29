type ImageServices = {
  src: string;
  width: number;
  height: number;
  className: string;
};

type CTAServices = {
  label: string;
  href: string;
};

type StickerServices = {
  src: string;
  width: number;
  height: number;
  className: string;
}

export type ServiceSlideType = {
  id: string;
  tone: "light" | "dark";
  image: ImageServices;
  title: string;
  description: string;
  items: string[];
  cta: CTAServices;
  callout?: string;
  stickers?: StickerServices[];
};

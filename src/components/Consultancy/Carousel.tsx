"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icons } from "@/src/components/UI/Icons";
import type { ServiceSlideType } from "@/src/types/services";
import { ServicesSlides } from "@/src/utils/content/services";
import { carouselMotion } from "@/src/utils/animation/carouselMotion";

const toneStyles = {
  light: {
    card: "bg-beige-200",
    content: "text-chili-pepper-500",
    title: "text-chili-pepper-400",
    check: "#C21514",
    cta: "bg-chili-pepper-400 text-white hover:bg-chili-pepper-500 focus-visible:outline-chili-pepper-400",
    texture: false,
  },
  dark: {
    card: "bg-chili-pepper-300",
    content: "text-[#52191c]",
    title: "text-white",
    check: "#52191C",
    cta: "bg-white text-chili-pepper-400 hover:bg-off-white-100 focus-visible:outline-white",
    texture: true,
  },
} satisfies Record<
  ServiceSlideType["tone"],
  {
    card: string;
    content: string;
    title: string;
    check: string;
    cta: string;
    texture: boolean;
  }
>;

function ServiceCard({
  slide,
  isActive,
}: {
  slide: ServiceSlideType;
  isActive: boolean;
}) {
  const styles = toneStyles[slide.tone];

  return (
    <article
      className={`relative flex min-w-0 flex-[0_0_100%] flex-col rounded-4xl sm:flex-[0_0_80%] lg:flex-[0_0_72%] xl:h-273 xl:flex-[0_0_827px] ${styles.card}`}
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden sm:aspect-video lg:aspect-827/324 xl:aspect-auto xl:h-81">
        <Image
          src={slide.image.src}
          alt=""
          width={slide.image.width}
          height={slide.image.height}
          sizes="(min-width: 1280px) 827px, (min-width: 1024px) 72vw, (min-width: 640px) 80vw, 100vw"
          quality={90}
          className={`absolute inset-0 h-full w-full max-w-none object-cover xl:object-fill ${slide.image.className}`}
        />
      </div>

      <div
        className={`relative flex flex-1 flex-col px-5 pt-8 pb-8 sm:px-6 xl:px-10.5 xl:pt-15.5 xl:pb-0 ${styles.content}`}
      >
        {styles.texture && (
          <div className="pointer-events-none absolute inset-0 bg-[url('/header/texture.png')] bg-size-[800px_800px] bg-top-left bg-repeat opacity-[0.36] mix-blend-soft-light" />
        )}

        <div className="relative z-10">
          <h3
            className={`font-sansita-one text-3xl leading-9 xl:text-10 xl:leading-[46.8px] ${styles.title}`}
          >
            {slide.title}
          </h3>
          <p className="mt-3.75 font-dm-sans text-base leading-6.5 opacity-90 xl:text-lg xl:leading-[28.8px]">
            {slide.description}
          </p>

          <ul className="mt-8 flex flex-col gap-4 font-dm-sans text-sm leading-5.5 sm:text-base sm:leading-6.5 xl:leading-[25.6px]">
            {slide.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Icons.Check
                  width={23}
                  height={23}
                  fill={styles.check}
                  className="mt-px shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative z-10 flex flex-col items-center text-center xl:absolute xl:inset-x-10.5 xl:mt-0 ${slide.callout ? "mt-10 xl:bottom-21" : "mt-8 xl:bottom-16"}`}
        >
          {slide.callout && (
            <p
              className={`font-sansita-one text-2xl leading-8 xl:flex xl:h-15.25 xl:items-center xl:text-7.5 xl:leading-[46.8px] xl:whitespace-nowrap ${styles.title}`}
            >
              {slide.callout}
            </p>
          )}
          <Link
            href={slide.cta.href}
            className={`inline-flex w-full max-w-sm justify-center rounded-xl px-4 py-4 text-center font-dm-sans text-base font-semibold tracking-[1px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto sm:px-8 xl:px-12 xl:py-4.5 xl:text-xl xl:leading-6.25 xl:whitespace-nowrap ${slide.callout ? "mt-3.5" : ""} ${styles.cta}`}
          >
            {slide.cta.label}
          </Link>
        </div>
      </div>

      {slide.stickers?.map((sticker) => (
        <Image
          key={sticker.src}
          src={sticker.src}
          alt=""
          width={sticker.width}
          height={sticker.height}
          unoptimized
          className={`pointer-events-none absolute z-20 hidden motion-safe:transition-[opacity,translate,scale] motion-safe:duration-500 motion-safe:ease-out xl:block ${isActive ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"} ${sticker.className}`}
        />
      ))}
    </article>
  );
}

export function ConsultancyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    ...carouselMotion,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    const onSelect = () => {
      updateButtons();
      setActiveIndex(null);
    };
    const onSettle = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    const onReInit = () => {
      updateButtons();
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    const onPointerUp = () => emblaApi.scrollTo(emblaApi.selectedScrollSnap());

    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettle);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("settle", onSettle);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <div className="relative min-w-0 pb-16 xl:h-276 xl:pb-0">
      <div className=" xl:h-276" ref={emblaRef}>
        <div className="flex touch-pan-y items-stretch gap-4 xl:gap-12">
          {ServicesSlides.map((slide, index) => (
            <ServiceCard
              key={slide.id}
              slide={slide}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Ver card anterior da consultoria"
        disabled={!canScrollPrev}
        onClick={() => emblaApi?.scrollPrev()}
        className={`absolute bottom-0 left-0 z-30 flex size-11 cursor-pointer items-center justify-center rounded-full drop-shadow-[-1px_3px_1.5px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-pepper-400 motion-safe:transition-[opacity,translate] motion-safe:duration-300 xl:top-[545.5px] xl:bottom-auto xl:-left-5.25 xl:size-15.75 xl:-translate-y-1/2 ${canScrollPrev ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0"}`}
      >
        <span className="block rotate-180">
          <Icons.Arrow
            width={63}
            height={63}
            className="size-11 xl:size-15.75"
          />
        </span>
      </button>

      <button
        type="button"
        aria-label="Ver próximo card da consultoria"
        disabled={!canScrollNext}
        onClick={() => emblaApi?.scrollNext()}
        className={`absolute right-0 bottom-0 z-30 flex size-11 cursor-pointer items-center justify-center rounded-full drop-shadow-[-1px_3px_1.5px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-pepper-400 motion-safe:transition-[opacity,translate] motion-safe:duration-300 xl:top-[545.5px] xl:bottom-auto xl:-right-5.25 xl:size-15.75 xl:-translate-y-1/2 ${canScrollNext ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"}`}
      >
        <Icons.Arrow
          width={63}
          height={63}
          className="size-11 xl:size-15.75"
        />
      </button>
    </div>
  );
}

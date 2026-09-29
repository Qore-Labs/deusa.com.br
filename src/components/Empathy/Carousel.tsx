"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icons } from "@/src/components/UI/Icons";
import { EmpathySlides } from "@/src/utils/content/empathy";
import { carouselMotion } from "@/src/utils/animation/carouselMotion";

export function EmpathyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    ...carouselMotion,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    const onPointerUp = () => emblaApi.scrollTo(emblaApi.selectedScrollSnap());
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <div className="relative min-w-0 pb-14 sm:pb-0 lg:ml-4.75 lg:mr-px">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y items-stretch gap-4 md:gap-8">
          {EmpathySlides.map((slide) => (
            <article
              key={slide.id}
              className="flex min-h-124 min-w-0 flex-[0_0_100%] flex-col overflow-hidden rounded-3xl bg-white sm:flex-[0_0_80%] md:min-h-144 md:flex-[0_0_min(483px,60%)] xl:flex-[0_0_min(483px,41.1%)]"
            >
              <div className="relative h-60 shrink-0 sm:h-64 md:h-83.75">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1280px) 483px, (min-width: 768px) 60vw, (min-width: 640px) 80vw, 100vw"
                  quality={90}
                  className={`object-cover ${slide.imagePosition}`}
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-5 py-6 text-center sm:px-5.5">
                <h3 className="font-sansita-one text-xl leading-7 text-blue-200 md:text-2xl md:leading-8.5">
                  {slide.title}
                </h3>
                <p className="mt-3 max-w-92 font-dm-sans text-sm leading-5.5 text-gray-300 md:text-base md:leading-6.5">
                  {slide.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-linear-to-r from-blue-100 to-transparent motion-safe:transition-opacity motion-safe:duration-300 sm:block md:w-29.5 ${canScrollPrev ? "opacity-100" : "opacity-0"}`}
      />
      <button
        type="button"
        aria-label="Ver cards anteriores"
        disabled={!canScrollPrev}
        onClick={() => emblaApi?.scrollPrev()}
        className={`absolute bottom-0 left-0 flex size-11 cursor-pointer items-center justify-center rounded-full drop-shadow-[-1px_3px_1.5px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-[opacity,translate] motion-safe:duration-300 sm:top-1/2 sm:bottom-auto sm:left-3 sm:size-15.75 sm:-translate-y-1/2 md:left-7.5 ${canScrollPrev ? "opacity-100 translate-x-0" : "pointer-events-none -translate-x-2 opacity-0"}`}
      >
        <span className="block rotate-180">
          <Icons.Arrow width={63} height={63} className="size-11 sm:size-15.75" />
        </span>
      </button>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-linear-to-l from-blue-100 to-transparent motion-safe:transition-opacity motion-safe:duration-300 sm:block md:w-29.5 ${canScrollNext ? "opacity-100" : "opacity-0"}`}
      />
      <button
        type="button"
        aria-label="Ver próximos cards"
        disabled={!canScrollNext}
        onClick={() => emblaApi?.scrollNext()}
        className={`absolute right-0 bottom-0 flex size-11 cursor-pointer items-center justify-center rounded-full drop-shadow-[-1px_3px_1.5px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-[opacity,translate] motion-safe:duration-300 sm:top-1/2 sm:right-3 sm:bottom-auto sm:size-15.75 sm:-translate-y-1/2 md:right-7.5 ${canScrollNext ? "opacity-100 translate-x-0" : "pointer-events-none translate-x-2 opacity-0"}`}
      >
        <Icons.Arrow width={63} height={63} className="size-11 sm:size-15.75" />
      </button>
    </div>
  );
}

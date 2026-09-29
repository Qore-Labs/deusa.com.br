import { Card } from "@/src/components/Feedback/Card";
import { Timer } from "@/src/components/Timer";
import { Container } from "@/src/components/UI/Container";
import { Feedbacks } from "@/src/utils/content/feedbacks";
import Link from "next/link";
import { EmpathyCarousel } from "@/src/components/Empathy/Carousel";
import { ConsultancyCarousel } from "@/src/components/Consultancy/Carousel";
import { AboutContent } from "@/src/utils/content/about";
import Image, { getImageProps } from "next/image";
import { FAQItems } from "@/src/utils/content/faq";
import { FAQAccordion } from "@/src/components/FAQ/Accordion";

const {
  props: { srcSet: mobileHeroSrcSet },
} = getImageProps({
  src: "/heroart/multitasks-mobile.webp",
  alt: "",
  width: 520,
  height: 941,
  sizes: "100vw",
  quality: 90,
});

export default function Home() {
  return (
    <main>
      <section className="relative isolate flex min-h-svh before:absolute before:inset-0 before:-z-10 before:bg-linear-to-r before:from-black/80 before:via-black/55 before:to-black/25 lg:before:from-black/40 lg:before:via-black/15 lg:before:to-transparent">
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet={mobileHeroSrcSet}
            sizes="100vw"
          />
          <Image
            src="/heroart/multitasks.webp"
            alt=""
            fill
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            quality={90}
            className="-z-20 object-cover object-[62%_center] lg:object-center"
          />
        </picture>
        <Container className="flex flex-col items-start justify-center px-6 py-16 text-start sm:px-10 lg:px-16 xl:px-28">
          <span className="font-42dot text-xs font-bold tracking-[2px] text-white uppercase underline sm:text-sm sm:tracking-[3px]">
            marketing digital & BRANDING
          </span>
          <h1 className="mt-4 mb-6 max-w-2xl font-sansita-one text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[47.24px]">
            Sua clínica elevada
            <span className="block text-5xl leading-[1.05] sm:text-6xl lg:text-[62px]">
              ao nível DEUSA
            </span>
          </h1>
          <p className="mb-10 max-w-xl font-42dot text-base leading-6 text-white/90 sm:text-lg sm:leading-7">
            A metodologia definitiva para profissionais da saúde que buscam
            transmutar conhecimento técnico em prestígio inabalável e
            rentabilidade premium.
          </p>
          <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <Link
              href="#quero-ser-elite"
              className="flex min-h-14 w-full items-center justify-center rounded-2xl border-2 border-white bg-white/85 px-4 text-center font-42dot text-xs font-bold tracking-[1.2px] text-blue-200 uppercase shadow-xl transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-50"
            >
              Quero ser elite
            </Link>
            <Link
              href="#ver-manifesto"
              className="flex min-h-14 w-full items-center justify-center rounded-2xl border-2 border-white px-4 text-center font-42dot text-xs font-bold tracking-[1.2px] text-white uppercase transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-50"
            >
              Ver manifesto
            </Link>
          </div>
        </Container>
      </section>

      <Timer endDate="2026-11-19T23:59:59-03:00" />

      <section className="bg-[url('/feedbacks/bg-texture.webp')] bg-background bg-no-repeat bg-cover h-auto w-full relative after:content-[''] after:w-full after:h-full after:inset-0 after:bg-linear-to-t after:from-background after:to-transparent after:from-40% after:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-background/60 before:absolute">
        <Container className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center sm:px-8 md:py-20 xl:px-16">
          <span className="w-34.5 h-auto text-sm font-dm-sans font-semibold text-white uppercase tracking-[1.4px] bg-blue-100 flex items-center justify-center rounded-full mb-5">
            Depoimentos
          </span>
          <h2 className="mb-10 max-w-4xl font-sansita-one text-3xl leading-tight text-blue-200 sm:text-4xl md:mb-16">
            Histórias de quem já está colhendo resultados...
          </h2>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {Feedbacks.map((feedback) => (
              <Card key={feedback._id} feedback={feedback} />
            ))}
          </div>
        </Container>
      </section>

      <section id="beneficios" className="bg-white px-4 md:px-10">
        <Container className="relative isolate overflow-hidden rounded-3xl border-2 border-blue-200/32 bg-blue-100 bg-[url('/empathy/chess-texture.png')] px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-2 text-center sm:px-4">
            <span className="rounded-full bg-blue-200 px-4 py-1 font-dm-sans text-sm font-semibold tracking-[0.7px] text-white">
              Você não precisa fazer tudo sozinho
            </span>
            <h2 className="font-sansita-one text-3xl leading-10 text-white md:text-4xl md:leading-11.75">
              Você está aqui porque...
            </h2>
          </div>

          <div className="mt-7.5">
            <EmpathyCarousel />
          </div>

          <div className="mt-8 flex justify-center sm:mt-11 sm:px-4">
            <Link
              href="#whatsapp"
              className="w-full rounded-xl bg-blue-200 px-5 py-4 text-center font-dm-sans text-sm font-semibold tracking-[0.7px] text-white transition-colors hover:bg-blue-200/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-10"
            >
              Quero começar minha jornada
            </Link>
          </div>
        </Container>
      </section>

      <section
        id="consultoria"
        aria-labelledby="consultoria-title"
        className="overflow-x-clip bg-gray-200 px-4 pt-8 pb-13 md:px-10"
      >
        <Container>
          <div className="mb-4 flex min-h-17.25 items-start justify-center pt-1 text-center xl:h-17.25">
            <h2
              id="consultoria-title"
              className="font-sansita-one text-3xl leading-tight text-blue-200 md:text-4xl md:leading-[46.8px]"
            >
              Pra quem é essa Consultoria?
            </h2>
          </div>
          <ConsultancyCarousel />
        </Container>
      </section>

      <section
        id="bio"
        aria-labelledby="bio-title"
        className="bg-white px-4 py-16 md:px-10 xl:px-16 xl:py-20"
      >
        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 size-24 rounded-tl-[57px] border-t-4 border-l-4 border-blue-200/40 sm:-top-6 sm:-left-6 sm:size-32"
              />
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.27),0_8px_10px_-6px_rgba(0,0,0,0.13)]">
                <Image
                  src={AboutContent.image.src}
                  alt={AboutContent.image.alt}
                  fill
                  sizes="(min-width: 1280px) 544px, (min-width: 1024px) 45vw, (min-width: 640px) 512px, calc(100vw - 32px)"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-6 lg:max-w-none">
              <p className="font-dm-sans text-sm leading-[16.8px] font-semibold italic tracking-[0.7px] text-greyish-green-200">
                {AboutContent.eyebrow}
              </p>
              <h2
                id="bio-title"
                className="font-sansita-one text-3xl leading-[1.3] text-chili-pepper-400 md:text-4xl"
              >
                {AboutContent.title}
              </h2>
              <p className="font-dm-sans text-lg leading-[28.8px] text-brown-200">
                {AboutContent.introduction}
              </p>
              <p className="font-dm-sans text-base leading-6.5 text-brown-100">
                {AboutContent.description}
              </p>

              <dl className="grid w-full grid-cols-2 gap-4 pt-4.25">
                {AboutContent.metrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="flex min-w-0 flex-col rounded-xl border border-chili-pepper-100 bg-background px-4 py-4"
                  >
                    <dt className="order-2 font-dm-sans text-xs leading-[16.8px] text-brown-100">
                      {metric.label}
                    </dt>
                    <dd className="order-1 font-sansita-one text-2xl leading-[33.6px] text-chili-pepper-400">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="flex flex-wrap gap-3 pt-4.25">
                {AboutContent.tags.map((tag) => (
                  <li
                    key={tag.id}
                    className="rounded-full border border-greyish-green-100/20 bg-greyish-green-100/10 px-4 py-1.5 font-dm-sans text-xs leading-[16.8px] text-greyish-green-200"
                  >
                    {tag.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="bg-background px-4 py-16 md:py-20"
      >
        <Container>
          <div className="mx-auto w-full max-w-3xl md:px-6">
            <div className="text-center">
              <p className="font-dm-sans text-sm leading-5 font-semibold tracking-[1.4px] text-blue-200 uppercase">
                FAQ
              </p>
              <h2
                id="faq-title"
                className="mt-2 font-sansita-one text-3xl leading-[1.3] text-chili-pepper-400 md:text-4xl"
              >
                Perguntas Frequentes
              </h2>
            </div>

            <div className="mt-16 flex flex-col gap-4">
              <FAQAccordion items={FAQItems} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

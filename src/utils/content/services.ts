import type { ServiceSlideType } from "@/src/types/services";
import { v4 as uuidv4 } from "uuid";

export const ServicesSlides: ServiceSlideType[] = [
  {
    id: uuidv4(),
    tone: "light",
    image: {
      src: "/services/fc8aa4cb6f546c62f600eab9060fd47c118a24e1.webp",
      width: 1549,
      height: 784,
      className:
        "xl:left-[-2.68%] xl:top-[-1.5%] xl:h-[140.34%] xl:w-[108.73%]",
    },
    title: "Essa consultoria é pra você que...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut ut id integer arcu turpis massa viverra tellus. Duis et in quis nunc sit pretium id tincidunt etiam. Sem eget fusce sapien.",
    items: [
      "Quer atrair pacientes alinhados com seus valores",
      "Tem medo de parecer superficial ou antiética ao divulgar seu trabalho",
      "Está cansada de se comparar com outras psicólogas nas redes",
      "Anda desmotivada com o digital e sente que perdeu a conexão com o próprio conteúdo",
      "Posta, mas sente que nada engaja e que ninguém se interessa pelo seu serviço",
      "Sente que precisa estar nas redes, mas não sabe nem por onde começar",
      "Já tentou seguir fórmulas, mas se sentiu engessada ou artificial",
      "Sabe que tem muito a dizer, mas trava diante da câmera",
      "Ainda está na graduação e já quer construir uma presença consciente nas redes: com estratégia e ética desde o início",
    ],
    cta: {
      label: "Saiba mais sobre a Consultoria",
      href: "#whatsapp",
    },
  },
  {
    id: uuidv4(),
    tone: "dark",
    image: {
      src: "/services/c721f2bda1a612da167bf63374d69a22c585872b.webp",
      width: 1977,
      height: 833,
      className:
        "xl:left-[0.02%] xl:top-[-1.17%] xl:h-[115.79%] xl:w-[108.08%]",
    },
    title: "Essa consultoria não é pra você que...",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed bibendum at placerat tempor dui. Nec nulla rhoncus consequat ultrices ornare. Velit eu est orci at viverra laoreet ornare.",
    items: [
      "Está procurando uma fórmula pronta pra viralizar rápido",
      "Quer copiar o que outras pessoas estão fazendo sem pensar no seu propósito",
      "Acredita que marketing é mais importante que ética",
      "Não quer criar conteúdo fora da caixa e prefere se manter na zona de conforto",
      "Prefere soluções milagrosas a um processo consistente",
      "Não vê problema em se comunicar de forma genérica só pra agradar o algoritmo",
      "Não é psicóloga ou estudante de psicologia",
    ],
    callout: "Fazer sozinho é economia ou prejuízo maquiado?",
    cta: {
      label: "Agendar sessão estratégica",
      href: "#whatsapp",
    },
    stickers: [
      {
        src: "/services/37491a257a176be45d1b23db2f538500ee761847.png",
        width: 145,
        height: 145,
        className:
          "-right-10 bottom-5 -rotate-[5.31deg] rounded-[14px] shadow-[-2px_3px_3px_rgba(0,0,0,0.25)]",
      },
      {
        src: "/services/8228a2d87e3e63973cbad7ef3a508049f9fe042e.png",
        width: 145,
        height: 145,
        className:
          "right-16 -bottom-18 rotate-[8.37deg] rounded-[19px] shadow-[3px_1px_4px_rgba(0,0,0,0.25)]",
      },
    ],
  },
];

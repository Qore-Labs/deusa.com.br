import { v4 as uuidv4 } from "uuid";
import type { AboutContentType } from "@/src/types/about";

export const AboutContent: AboutContentType = {
  image: {
    src: "/about/3e85eae54de38b75e8e4b848f1001a9a46eddb3b.webp",
    alt: "Mulher sentada em um banco trabalhando no notebook",
  },
  eyebrow: "👋 Oi, eu sou a Deusa",
  title: "Minha trajetória...",
  introduction:
    "Sou estrategista de marketing para psicólogos há 4 anos, com mais de 80 marcas pessoais criadas e 3 especializações na bagagem. Mas antes de qualquer métrica, sou alguém que entende que divulgar seu trabalho não é mercantilizar a clínica, é democratizar a saúde mental.",
  description:
    "Trabalho com psicólogos que buscam posicionar sua prática no digital, especialmente aqueles que vivenciam a sobrecarga de divulgar a clínica, a insegurança com as redes e questionamentos sobre ética no marketing. Ofereço desde consultoria individual até gestão de presença digital e branding. Meu trabalho é baseado em estratégias de mercado validadas, mas conduzido com respeito às normas do CFP e escuta sensível.",
  metrics: [
    { id: uuidv4(), value: "+100", label: "Atendimentos" },
    { id: uuidv4(), value: "3", label: "Especializações" },
  ],
  tags: [
    { id: uuidv4(), label: "+30 Cursos de Especialização" },
    { id: uuidv4(), label: "Terapia Cognitivo Comportamental" },
  ],
};

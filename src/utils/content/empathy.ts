import { EmpathyType } from "@/src/types/empathy";
import { v4 as uuidv4 } from "uuid";

export const EmpathySlides: EmpathyType[] = [
    {
        id: uuidv4(),
        image: "/empathy/d5a35565959a78504555305554d9c05f39b41383.webp",
        alt: "Pessoa pensando em sua consultoria",
        title: "Precisa de uma Consultoria personalizada",
        description: "Lorem ipsum dolor sit amet consectetur. Erat eleifend commodo nunc consequat fames porttitor. Orci enim ac diam viverra. Est commodo.",
        imagePosition: "object-center",
    },
    {
        id: uuidv4(),
        image: "/empathy/0483a466f873b55ab695183245b7f83511158f14.webp",
        alt: "Pessoa usando o celular para se comunicar",
        title: "Quer ter maior alcance com seus vídeos nas redes sociais",
        description: "Lorem ipsum dolor sit amet consectetur. Erat eleifend commodo nunc consequat fames porttitor. Orci enim ac diam viverra. Est commodo.",
        imagePosition: "object-[center_20%]",
    },
    {
        id: uuidv4(),
        image: "/empathy/7a2a62d00960607d697ef79da91d6fbc339e15d2.webp",
        alt: "Cérebro ilustrado ao lado de um símbolo de arroba",
        title: "Sua marca precisa de mais consistência e autoridade",
        description: "Lorem ipsum dolor sit amet consectetur. Erat eleifend commodo nunc consequat fames porttitor. Orci enim ac diam viverra. Est commodo.",
        imagePosition: "object-left",
    },
]

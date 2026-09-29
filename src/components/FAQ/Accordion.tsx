"use client";

import { useState } from "react";
import { Icons } from "@/src/components/UI/Icons";
import type { FAQItemType } from "@/src/types/faq";

function FAQItem({ item }: { item: FAQItemType }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="overflow-hidden rounded-xl border border-chili-pepper-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-18 w-full cursor-pointer items-center justify-between gap-4 px-6 py-6 text-left font-dm-sans text-base leading-6 font-semibold text-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-chili-pepper-400"
      >
        {item.question}
        <Icons.ChevronDown
          aria-hidden="true"
          className={`shrink-0 motion-safe:transition-transform motion-safe:duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        id={answerId}
        aria-hidden={!open}
        className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`border-t border-chili-pepper-100 px-6 py-5 font-dm-sans text-sm leading-6 text-brown-100 motion-safe:transition-[opacity,translate] motion-safe:duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItemType[] }) {
  return items.map((item) => <FAQItem key={item.id} item={item} />);
}

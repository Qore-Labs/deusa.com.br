"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu } from "../Menu";
import { Icons } from "../UI/Icons";
import styles from "./header.module.css";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [open]);

  return (
    <div
      ref={menuRef}
      className="lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {open ? (
          <Icons.Close aria-hidden="true" />
        ) : (
          <Icons.MenuBars aria-hidden="true" />
        )}
      </button>
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`absolute top-full right-0 left-0 rounded-b-2xl bg-blue-100 bg-[url('/header/chess-texture.png')] px-6 py-4 shadow-xl motion-safe:transition-[opacity,translate] motion-safe:duration-200 motion-safe:ease-out ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
      >
        <Menu mobile onNavigate={() => setOpen(false)} />
        <Link
          href="#whatsapp"
          onClick={() => setOpen(false)}
          className={`${styles.contactButton} mt-5 flex min-h-11 w-full items-center justify-center rounded-lg bg-chili-pepper-400 px-4 text-center font-dm-sans text-sm font-semibold text-white`}
        >
          Entrar em contato
        </Link>
      </div>
    </div>
  );
}

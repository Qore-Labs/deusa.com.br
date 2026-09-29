"use client";

import { Fragment, useEffect, useState } from "react";
import { Container } from "../UI/Container";
import { type TimerDate } from "@/src/types/timer";
import { getCountdown, toTimestamp } from "./countdown";

type TimerProps = {
  /** Data de início opcional. Para strings, use ISO 8601 com fuso horário. */
  startDate?: TimerDate;
  /** Data de término obrigatória. Exemplo: 2026-12-31T23:59:59-03:00. */
  endDate: TimerDate;
  className?: string;
};

export const Timer = ({ startDate, endDate }: TimerProps) => {
  // O primeiro render é igual no servidor e durante a hidratação.
  const [now, setNow] = useState<number | null>(null);
  const startTime =
    startDate === undefined ? undefined : toTimestamp(startDate);
  const endTime = toTimestamp(endDate);
  const countdown = getCountdown({ startTime, endTime, now });
  const isValid = countdown.status !== "invalid";

  useEffect(() => {
    if (!isValid) return;

    let timeout: ReturnType<typeof setTimeout>;

    const update = () => {
      const currentTime = Date.now();
      setNow(currentTime);

      if (currentTime >= endTime) return;

      const target =
        startTime !== undefined && currentTime < startTime
          ? startTime
          : endTime;

      timeout = setTimeout(update, Math.min(1000, target - currentTime));
    };

    const syncWhenVisible = () => {
      if (document.visibilityState !== "visible") return;
      clearTimeout(timeout);
      update();
    };

    timeout = setTimeout(update, 0);
    document.addEventListener("visibilitychange", syncWhenVisible);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("visibilitychange", syncWhenVisible);
    };
  }, [startTime, endTime, isValid]);

  if (countdown.status !== "active") return null;

  const units = [
    { label: "Dias", value: countdown.days },
    { label: "Horas", value: countdown.hours },
    { label: "Min", value: countdown.minutes },
    { label: "Seg", value: countdown.seconds },
  ];

  return (
    <section
      className="w-full border-t-5 border-b border-beige-100 bg-beige-300 px-4 py-8 sm:py-12"
      aria-label="Promoção Elite divina"
    >
      <Container className="flex flex-col items-center justify-center">
        <div
          data-status={countdown.status}
          className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8"
        >
          <p className="max-w-2xl text-center font-sansita-one text-lg tracking-[1.8px] text-chili-pepper-500 uppercase sm:text-2xl sm:tracking-[2.4px]">
            Promo pack <span className="text-2xl text-chili-pepper-400 sm:text-4xl">Elite divina</span>{" "}
            encerra em:
          </p>
          <div
            role="timer"
            aria-live="off"
            aria-label="Tempo restante da promoção"
            className="grid w-full max-w-2xl grid-cols-4 items-start gap-1 sm:flex sm:justify-center sm:gap-0"
          >
            {units.map(({ label, value }, index) => (
              <Fragment key={label}>
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden font-sansita-one text-5xl text-chili-pepper-500 sm:block"
                  >
                    :
                  </span>
                )}
                <div className="flex min-w-0 flex-col items-center justify-center gap-2 sm:flex-1">
                  <span className="font-sansita-one text-3xl text-chili-pepper-400 sm:text-5xl">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-center font-42dot text-[10px] font-bold tracking-[1px] text-blue-200 uppercase sm:text-sm sm:tracking-[2.4px]">
                    {label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

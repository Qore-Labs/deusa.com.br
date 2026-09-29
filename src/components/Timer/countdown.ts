import { Countdown, TimerDate } from "@/src/types/timer";


export const toTimestamp = (date: TimerDate): number =>
  date instanceof Date ? date.getTime() : Date.parse(date);

export const getCountdown = ({
  startTime,
  endTime,
  now,
}: {
  startTime?: number;
  endTime: number;
  now: number | null;
}): Countdown => {
  const empty = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (
    !Number.isFinite(endTime) ||
    (startTime !== undefined &&
      (!Number.isFinite(startTime) || startTime >= endTime))
  ) {
    return { ...empty, status: "invalid" };
  }

  if (now === null) return { ...empty, status: "loading" };
  if (now >= endTime) return { ...empty, status: "ended" };

  const scheduled = startTime !== undefined && now < startTime;
  const target = scheduled ? startTime : endTime;
  const totalSeconds = Math.ceil((target - now) / 1000);

  return {
    status: scheduled ? "scheduled" : "active",
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

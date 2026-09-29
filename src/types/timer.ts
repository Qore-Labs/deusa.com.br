export type TimerDate = string | Date;

export type CountdownStatus = "loading" | "scheduled" | "active" | "ended" | "invalid";

export type Countdown = {
    status: CountdownStatus;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
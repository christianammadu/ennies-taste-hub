/** Money helpers — all maths in cents to avoid float drift. */
export function money(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function dollars(amount: number) {
  return Math.round(amount * 100);
}

/** Date helpers — the whole site is DD/MM/YYYY, day first, always. */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Format a Date as DD/MM/YYYY. */
export function formatDateDDMMYYYY(date: Date) {
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

/** Parse a strictly day-first DD/MM/YYYY string. Returns null when invalid. */
export function parseDDMMYYYY(value: string): Date | null {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim());
  if (!match) return null;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const date = new Date(year, month - 1, day, 12, 0, 0, 0);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

/** Combine a DD/MM/YYYY date and a HH:MM time into a Date. */
export function combineDateTime(dateStr: string, timeStr: string): Date | null {
  const date = parseDDMMYYYY(dateStr);
  if (!date) return null;
  const time = /^(\d{1,2}):(\d{2})$/.exec(timeStr.trim());
  if (!time) return null;
  const hours = Number(time[1]);
  const minutes = Number(time[2]);
  if (hours > 23 || minutes > 59) return null;
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

/** Hours between now and the given date. */
export function hoursFromNow(date: Date) {
  return (date.getTime() - Date.now()) / 36e5;
}

/** Auto-insert slashes while typing a DD/MM/YYYY date. */
export function maskDateInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)];
  return parts.filter(Boolean).join("/");
}

export function formatTime12h(timeStr: string) {
  const time = /^(\d{1,2}):(\d{2})$/.exec(timeStr.trim());
  if (!time) return timeStr;
  const hours = Number(time[1]);
  const suffix = hours >= 12 ? "PM" : "AM";
  const display = hours % 12 === 0 ? 12 : hours % 12;
  return `${display}:${time[2]} ${suffix}`;
}
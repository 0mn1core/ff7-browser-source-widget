import { ClockFormat } from "../types/clock";

interface SegmentedTime {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

/**
 * Function to create a formatted clock string for the given format and time.
 * @param {ClockFormat} clockFormat The format to adhere to.
 * @param {SegmentedTime} time An object containing the seconds, minutes, hours, and days to be used in creating the formatted string.
 * @returns A formatted clock string, with the appropriate time segments and zero-padded digits.
 */
export function formatClockTime(
  clockFormat: ClockFormat,
  {
    seconds,
    minutes,
    hours,
    days
  }: SegmentedTime
) {
  const stringNumbers = [];
  const splitFormat = clockFormat.split(':');
  // Hours
  if (splitFormat.length === 3) {
    const hourDigits = splitFormat[0].length
    const hourString = ((days*24)+hours).toString().padStart(hourDigits, '0');
    stringNumbers.push(hourString);
  }
  // Minutes
  const minuteString = minutes.toString().padStart(2, '0');
  stringNumbers.push(minuteString);
  // Seconds
  const secondString = seconds.toString().padStart(2, '0');
  stringNumbers.push(secondString);

  return stringNumbers.join(':');
}

export function timeMatchesFormat(
  clockFormat: ClockFormat,
  clockTime: string
): boolean {
  if (clockFormat.length !== clockTime.length) {
    return false;
  }
  const splitFormat = clockFormat.split('');
  const splitTime = clockTime.split('');
  return splitTime.every((value, index) => {
    if (value === ':') {
      return splitFormat[index] === ':'
    }
    if (!Number.isNaN(Number(value))) {
      return splitFormat[index] !== ':'
    }
  })
}

/**
 * Function to get the corresponding clock format for a given clock string.
 * @param {string} clockTime The clock string to get the format for.
 * @returns {ClockFormat | undefined} The corresponding ClockFormat, or undefined if it doesn't match any.
 */
export function getFormatFromTime(
  clockTime: string
): ClockFormat | undefined {
  const matchesAnyFormat = /^(\d{1,3}:)?\d{2}:\d{2}$/.test(clockTime)
  if (!matchesAnyFormat) {
    return undefined;
  }
  const splitTime = clockTime.split(':');
  if (splitTime.length === 2) {
    return ClockFormat.ZeroHourDigits
  }
  if (splitTime.length === 3) {
    const hourDigits = splitTime[0].length
    const hourFormats = [undefined, ClockFormat.OneHourDigit, ClockFormat.TwoHourDigits, ClockFormat.ThreeHourDigits]
    return hourFormats[hourDigits];
  }
}

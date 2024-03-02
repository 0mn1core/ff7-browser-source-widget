import { ClockFormat, ClockFormatRank } from "../types/clock";
import { TIME_FORMAT_REGEX } from "./consts";

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

/**
 * Function to check whether a given clock string matches a given clock format.
 * @param {ClockFormat} clockFormat The format to check the match against.
 * @param {string} clockTime The clock string to check against the format.
 * @returns {boolean} Whether the passed in time correctly matches the format.
 */
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
 * If the minimum parameter is set, gets the minimum supported format after stripping leading zeroes.
 * @param {string} clockTime The clock string to get the corresponding or minimum format for.
 * @param {boolean} minimum Whether to get the corresponding or minimum ClockFormat.
 * @returns {ClockFormat | undefined} The corresponding or minimum ClockFormat, or undefined if it doesn't match any.
 */
export function getFormatFromTime(
  clockTime: string,
  minimum = false,
): ClockFormat | undefined {
  const matchesAnyFormat = TIME_FORMAT_REGEX.test(clockTime)
  if (!matchesAnyFormat) {
    return undefined;
  }
  const splitTime = clockTime.split(':');
  if (splitTime.length === 2) {
    return ClockFormat.ZeroHourDigits
  }
  if (splitTime.length === 3) {
    let hourString = splitTime[0]
    if (minimum) {
      // Convert to number and back to strip leading zeroes
      hourString = hourString.replace(/^0+/, "");
    }
    let hourDigits = hourString.length
    const hourFormats = [ClockFormat.ZeroHourDigits, ClockFormat.OneHourDigit, ClockFormat.TwoHourDigits, ClockFormat.ThreeHourDigits]
    return hourFormats[hourDigits];
  }
}

/**
 * Function to get the format necessary to update to if the current format isn't sufficient for a given string.
 * @param {string} clockTime The clock string to get the necessary format for.
 * @param {ClockFormat} currentClockFormat The current ClockForma to compare against
 * @returns {ClockFormat | undefined} The necessary ClockFormat to use, or undefined if the current one suffices.
 */
export function getNecessaryFormat(
  clockTime: string,
  currentClockFormat: ClockFormat
): ClockFormat | undefined{
  const minimumClockFormat = getFormatFromTime(clockTime, true);
  if (!minimumClockFormat) {
    return undefined;
  }
  if (ClockFormatRank[minimumClockFormat] > ClockFormatRank[currentClockFormat]) {
    return minimumClockFormat;
  }
}

/**
 * Get a date object respresenting the current time plus the passed in clock string.
 * If the passed in string isn't properly formatted, return the current time.
 * @param {String} clockTime A formatted clock string, to be used in creation of the date.
 * @returns {Date} A date object representing the time in the future based on the clock string.
 */
export function getDateFromClockTime(
  clockTime: string
){
  const matchesAnyFormat = TIME_FORMAT_REGEX.test(clockTime)
  if (!matchesAnyFormat) {
    return new Date();
  }
  const splitTime = clockTime.split(':');
  let hours = 0;
  if (splitTime.length === 3) {
    hours = Number(splitTime[0]);
    splitTime.shift();
  }
  const minutes = Number(splitTime[0]);
  const seconds = Number(splitTime[1]);
  return new Date(Date.now() + (((hours * 60 * 60) + (minutes * 60) + (seconds)) * 1000))
}

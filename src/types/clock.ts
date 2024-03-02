/**
 * Create a string enum to reference formats in code.
 */
export enum ClockFormat {
  ZeroHourDigits = "MM:SS",
  OneHourDigit = "H:MM:SS",
  TwoHourDigits = "HH:MM:SS",
  ThreeHourDigits = "HHH:MM:SS"
}

/**
 * Create a numeric enum with reverse mapping for format comparison.
 */
export enum ClockFormatRank {
  "MM:SS",
  "H:MM:SS",
  "HH:MM:SS",
  "HHH:MM:SS"
}
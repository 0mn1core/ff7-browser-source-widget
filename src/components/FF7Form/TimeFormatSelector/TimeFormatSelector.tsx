import { useMemo } from "react";
import { ClockFormat, ClockFormatRank } from "../../../types/clock";
import { getFormatFromTime } from "../../../utils/clock-utils"

import { TimeFormatSelect } from "./TimeFormatSelector.styles";

export interface TimeFormatSelectorProps {
  days: number;
  hours: number;
  clockTime: string;
  clockFormat: ClockFormat;
  setClockFormat: React.Dispatch<React.SetStateAction<ClockFormat>>;
}

/**
 * Component for the time format selection drop down.
 * @param {TimeFormatSelectorProps} props Props object containing the days/hours to minimize minimum format calculations,
 *                                        clockTime for the minimum format calculations, clockFormat for the controlled component.
 *                                        and the setClockFormat to update the lifted state.
 * @returns {React.ReactElement} A select dropdown that updates the clockFormat state and prevents picking incompatible formats for the current time.
 */
const TimeFormatSelector = ({
  days,
  hours,
  clockTime,
  clockFormat,
  setClockFormat
}: TimeFormatSelectorProps): React.ReactElement => {
  // Only recalculate on hour or day changes
  const minimumFormat = useMemo(
    ()=> {
      const minimumFormat = getFormatFromTime(clockTime, true);
      if (!minimumFormat) {
        return ClockFormat.ZeroHourDigits;
      }
      return minimumFormat
    }, 
    [days, hours]
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClockFormat(e.currentTarget.value as ClockFormat);
  }

  return (
    <TimeFormatSelect id="time-format" value={clockFormat} onChange={onChangeHandler}>
      <option 
        value={ClockFormat.ZeroHourDigits}
        label="Zero Hour Digits (MM:SS)"
        disabled={ClockFormatRank[minimumFormat] > ClockFormatRank[ClockFormat.ZeroHourDigits]}
      >
        {ClockFormat.ZeroHourDigits}
      </option>
      <option 
        value={ClockFormat.OneHourDigit}
        label="One Hour Digit (H:MM:SS)"
        disabled={ClockFormatRank[minimumFormat] > ClockFormatRank[ClockFormat.OneHourDigit]}
      >
        {ClockFormat.OneHourDigit}
      </option>
      <option 
        value={ClockFormat.TwoHourDigits}
        label="Two Hour Digits (HH:MM:SS)"
        disabled={ClockFormatRank[minimumFormat] > ClockFormatRank[ClockFormat.TwoHourDigits]}
      >
        {ClockFormat.TwoHourDigits}
      </option>
      <option 
        value={ClockFormat.ThreeHourDigits}
        label="Three Hour Digits (HHH:MM:SS)"
        disabled={ClockFormatRank[minimumFormat] > ClockFormatRank[ClockFormat.ThreeHourDigits]}
      >
        {ClockFormat.ThreeHourDigits}
      </option>
    </TimeFormatSelect>
  )

}

export default TimeFormatSelector;
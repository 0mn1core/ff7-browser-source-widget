import type { ClockFormat } from "../../../types/clock";

import { useState } from "react";
import { TIME_FORMAT_REGEX } from "../../../utils/consts";
import { getDateFromClockTime, getNecessaryFormat } from "../../../utils/clock-utils";

import { ValidationMessage } from "../../../utils/styles/ValidationMessage.styles";
import { TimeInput } from "./TimeSetter.styles";

export interface TimeSetterProps {
  clockFormat: ClockFormat;
  setClockFormat: React.Dispatch<React.SetStateAction<ClockFormat>>;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean) => void;
}

/**
 * Component for the countdown time input.
 * @param {TimeSetterProps} props Props object containing the function to set the countdown to a new time, as well as the
 *                                clockFormat and setter for bumping the format to accomodate times larger than the current format 
 * @returns {React.ReactElement} An input that sets the time for the countdown, and bumps the format to accomodate if needed.
 */
const TimeSetter = ({
  clockFormat,
  setClockFormat,
  restart
}: TimeSetterProps): React.ReactElement => {
  const [isValid, setIsValid] = useState(true);
  const [isClean, setIsClean] = useState(true);

  const validateTimeFormat = (clockTime: string) => {
    return TIME_FORMAT_REGEX.test(clockTime)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isClean) {
      setIsValid(validateTimeFormat(e.currentTarget.value));
    }
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (isClean) {
      setIsClean(false);   
    }
    setIsValid(validateTimeFormat(e.currentTarget.value))
  }

  const onKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const formattedTime = e.currentTarget.value
      if (validateTimeFormat(formattedTime)) {
        const clockFormatToSet = getNecessaryFormat(formattedTime, clockFormat);
        if (clockFormatToSet) {
          setClockFormat(clockFormatToSet)
        }
        restart(getDateFromClockTime(formattedTime));
      }
    }
  }

  return (
    <div>
      <TimeInput
        id="countdown-time"
        type="text"
        placeholder="Enter time in (HH)H:MM:SS or MM:SS format" 
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeydownHandler}
      />
      <ValidationMessage validity={isValid}>{"Please enter a time in valid (HH)H:MM:SS or MM:SS format"}</ValidationMessage>
    </div>
  )
}

export default TimeSetter;
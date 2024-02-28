import type { ClockFormat } from "../../../types/clock";

import { useState } from "react";
import { TIME_FORMAT_REGEX } from "../../../utils/consts";
import { getDateFromClockTime, getNecessaryFormat } from "../../../utils/clock-utils";

import { TimeInput, ValidationMessage } from "./TimeSetter.styles";

export interface TimeSetterProps {
  clockFormat: ClockFormat;
  setClockFormat: React.Dispatch<React.SetStateAction<ClockFormat>>;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean) => void;
}

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
import { useMemo, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { ClockFormat } from '../../types/clock';
import { formatClockTime } from '../../utils/clock-utils';
import FF7Widgets from '../FF7Widgets';

/**
 * Component responsible for managing state and rendering the widget and forms for the application.
 */
const FF7Overlay = (): React.ReactElement =>{
  const [clockFormat, setClockFormat] = useState<ClockFormat>(ClockFormat.ZeroHourDigits);
  const {seconds, minutes, hours, days} = useTimer({expiryTimestamp: new Date(Date.now() + 10*60*1000), autoStart: true});
  const clockTime = useMemo
  (
    () => formatClockTime(
      clockFormat,
      {
        seconds,
        minutes,
        hours,
        days
      }
    ),
    [
      clockFormat,
      seconds,
      minutes,
      hours,
      days
    ]
  );

  return (
    <FF7Widgets clockFormat={clockFormat} clockTime={clockTime}/>
  );
}

export default FF7Overlay;
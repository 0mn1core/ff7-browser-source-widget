import { useMemo, useState } from "react";
import { useTimer } from "react-timer-hook";
import { ClockFormat } from "../../types/clock";
import { formatClockTime } from "../../utils/clock-utils";
import FF7Widgets from "../FF7Widgets";
import FF7Form from "../FF7Form";

/**
 * Component responsible for managing state and rendering the widget and forms for the application.
 * @returns {React.ReactElement} Component containing displayed widget and form controls for the application.
 */
const FF7Overlay = (): React.ReactElement => {
  const [clockFormat, setClockFormat] = useState<ClockFormat>(
    ClockFormat.ZeroHourDigits
  );
  const { seconds, minutes, hours, days, isRunning, pause, resume, restart } =
    useTimer({ expiryTimestamp: new Date(Date.now()), autoStart: false });
  const clockTime = useMemo(
    () =>
      formatClockTime(clockFormat, {
        seconds,
        minutes,
        hours,
        days,
      }),
    [clockFormat, seconds, minutes, hours, days]
  );

  return (
    <>
      <FF7Widgets clockTime={clockTime} clockFormat={clockFormat} />
      <div className="spacer" />
      <FF7Form
        clockTime={clockTime}
        clockFormat={clockFormat}
        setClockFormat={setClockFormat}
        hours={hours}
        days={days}
        isRunning={isRunning}
        pause={pause}
        resume={resume}
        restart={restart}
      />
    </>
  );
};

export default FF7Overlay;

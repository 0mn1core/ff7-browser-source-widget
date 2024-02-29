import type { ClockFormat } from '../../types/clock';

import ControlRow from "./ControlRow";
import TimeSetter from "./TimeSetter";
import TimeFormatSelector from './TimeFormatSelector';

export interface FF7FormProps {
  clockTime: string;
  clockFormat: ClockFormat;
  setClockFormat: React.Dispatch<React.SetStateAction<ClockFormat>>;
  hours: number;
  days: number;
  // pause: () => void;
  // resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean) => void;
}

const FF7Form = ({clockTime, clockFormat, setClockFormat, hours, days, restart}: FF7FormProps): React.ReactElement => {

  return (
    <>
      <h1>FF7 Widgets</h1>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <h2>Timer Controls</h2>
        <ControlRow label="Countdown time:" childId="countdown-time">
          <TimeSetter clockFormat={clockFormat} setClockFormat={setClockFormat} restart={restart}/>
        </ControlRow>
        <ControlRow label="Time display format" childId="time-format">
          <TimeFormatSelector clockTime={clockTime} clockFormat={clockFormat} setClockFormat={setClockFormat} hours={hours} days={days}/>
        </ControlRow>
        {/* <ControlRow label="Run clock" childId="clock-play-pause">
          
        </ControlRow>
        <h2>Theme Controls</h2>
        <ControlRow label="Background color" childId="background-color">
          
        </ControlRow>
        <ControlRow label="Inactive cathode color" childId="inactive-cathode-color">
          
        </ControlRow>
        <ControlRow label="Active cathode color" childId="active-cathode-color">
          
        </ControlRow> */}
      </form>
    </>
  )
}

export default FF7Form;
import type { ClockFormat } from '../../types/clock';

import ControlRow from "./ControlRow";
import TimeSetter from "./TimeSetter";
import TimeFormatSelector from './TimeFormatSelector';
import PlayPauseButton from './PlayPauseButton';
import ColorControl from '../ColorControl';

import { FormBackground } from './FF7Form.styles';

export interface FF7FormProps {
  clockTime: string;
  clockFormat: ClockFormat;
  setClockFormat: React.Dispatch<React.SetStateAction<ClockFormat>>;
  hours: number;
  days: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  restart: (newExpiryTimestamp: Date, autoStart?: boolean) => void;
}

/**
 * Component representing a form with various controls for controlling clock behavior and styling the display.
 * @param {FF7FormProps} props Props object containg various time related attributes needed by the individual controls.
 * @returns {React.ReactElement} The form component allowing users to control and customize the widgets.
 */
const FF7Form = ({
  clockTime,
  clockFormat,
  setClockFormat,
  hours,
  days,
  isRunning,
  pause,
  resume,
  restart
}: FF7FormProps): React.ReactElement => {

  return (
    <FormBackground>
      <h1>FF7 Widgets</h1>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <h2>Timer Controls</h2>
        <ControlRow label='Countdown time:' childId='countdown-time'>
          <TimeSetter clockFormat={clockFormat} setClockFormat={setClockFormat} restart={restart} />
        </ControlRow>
        <ControlRow label='Time display format:' childId='time-format'>
          <TimeFormatSelector clockTime={clockTime} clockFormat={clockFormat} setClockFormat={setClockFormat} hours={hours} days={days} />
        </ControlRow>
        <ControlRow label='Run clock:' childId='clock-play-pause'>
          <PlayPauseButton isRunning={isRunning} pause={pause} resume={resume} />
        </ControlRow>
        <h2>Theme Controls</h2>
        <ControlRow label='Background color:' childId='widget-background-color-select'>
          <ColorControl buttonId='widget-background-color-select' themeColorName='widget_background_color' />
        </ControlRow>
        <ControlRow label='Inactive cathode color:' childId='inactive-cathode-color-select'>
          <ColorControl buttonId='inactive-cathode-color-select' themeColorName='inactive_cathode_color'/>
        </ControlRow>
        <ControlRow label='Active cathode color:' childId='active-cathode-color-select'>
          <ColorControl buttonId='active-cathode-color-select' themeColorName='active_cathode_color'/>
        </ControlRow>
      </form>
    </FormBackground>
  )
}

export default FF7Form;
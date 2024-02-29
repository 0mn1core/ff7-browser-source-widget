import { TimeToggleButton } from "./PlayPauseButton.styles";

export interface PlayPauseButtonProps {
  isRunning: boolean
  pause: () => void;
  resume: () => void;
}

/**
 * Component representing a button to control timer play/pause.
 * @param {PlayPauseButtonProps} props Props object containg the play and pause functions, 
 *                                     as well as the running state to control which is used.
 * @returns {React.ReactElement} A button component to play or pause the timer.
 */
const PlayPauseButton = ({
  isRunning,
  pause,
  resume
}: PlayPauseButtonProps): React.ReactElement => {
  const onClickHandler = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isRunning) {
      pause();
    } else {
      resume();
    }
  }

  return (
    <TimeToggleButton id="clock-play-pause" onClick={onClickHandler}>
      {isRunning ? 'Pause' : 'Play'}
    </TimeToggleButton>
  )
};

export default PlayPauseButton;
import type { ClockFormat } from '../../types/clock';

import NixieTubeClock from '../NixieTubeClock';

import { WidgetsContainer } from './FF7Widgets.styles';

export interface FF7WidgetsProps {
  clockFormat: ClockFormat;
  clockTime: string;
}

/**
 * Container Component for the overlay widgets.
 * Currently only contains a clock, but may be expanded with a text box in the future.
 * @param {FF7WidgetsProps} props
 * @returns {React.ReactElement} The widget container component.
 */
const FF7Widgets = ({clockFormat, clockTime}: FF7WidgetsProps): React.ReactElement => {
  return (
    <WidgetsContainer>
      <NixieTubeClock clockFormat={clockFormat} clockTime={clockTime}/>
    </WidgetsContainer>
  )

}

export default FF7Widgets;
import styled from "@emotion/styled"
import isPropValid from '@emotion/is-prop-valid'

import NixieClockSeparator from "../../../assets/images/clock/NixieClockSeparator.svg?react";

interface StyledNixieTubeSeparatorSVGProps {
  isBlinking: boolean;
}

export const StyledNixieTubeSeparatorSVG = styled(NixieClockSeparator, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color'
})<StyledNixieTubeSeparatorSVGProps>`
  display: inline;
  .wave {
    fill: ${props => props.theme.inactive_cathode_color};
  }
  .colon {
    fill: ${props => props.isBlinking ? props.theme.active_cathode_color : props.theme.inactive_cathode_color};
  }
`;
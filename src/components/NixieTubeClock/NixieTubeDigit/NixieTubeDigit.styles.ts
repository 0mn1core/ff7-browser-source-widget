import styled from "@emotion/styled";

export const StyledNixieTubeDigitSVG = styled.svg`
  display: inline;
  .inactive {
    fill: ${props => props.theme.inactive_cathode_color};
  }
  .active {
    fill: ${props => props.theme.active_cathode_color};
  }
`;
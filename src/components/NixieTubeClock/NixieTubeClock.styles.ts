import styled from "@emotion/styled";

import FF7Border from "../FF7Border";

export const BorderContainer = styled(FF7Border)`
  display: inline-block;
`;

export const ClockContainer = styled.div`
  display: block;
  height: 96px;
  padding: 4px;

  background-color: ${props => props.theme.widget_background_color};
`
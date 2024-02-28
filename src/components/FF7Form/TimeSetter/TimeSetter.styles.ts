import styled from "@emotion/styled";

interface ValidationMessageProps {
  validity: boolean;
}

export const TimeInput = styled.input`
  width: 300px;
`

export const ValidationMessage = styled.div<ValidationMessageProps>`
  visibility: ${props => props.validity ? 'hidden' : 'visible'};
  font-size: 12px;
  color: red;
`
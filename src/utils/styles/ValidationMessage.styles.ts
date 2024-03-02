import styled from "@emotion/styled";

interface ValidationMessageProps {
  validity: boolean;
};

export const ValidationMessage = styled.div<ValidationMessageProps>`
  visibility: ${props => props.validity ? 'hidden' : 'inherit'};
  font-size: 12px;
  color: red;
`;
import { ControlLabel, ControlRowContainer } from "./ControlRow.styles";

export interface ControlRowProps {
  children: React.ReactElement;
  label: string;
  childId: string;
}

const ControlRow = ({
  children,
  label,
  childId
}: ControlRowProps): React.ReactElement => {
  return (
    <ControlRowContainer>
      <ControlLabel htmlFor={childId}>
        {label}
      </ControlLabel>
      {children}
    </ControlRowContainer>
  )
}

export default ControlRow;
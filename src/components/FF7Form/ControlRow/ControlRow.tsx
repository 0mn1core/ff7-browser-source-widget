import { ControlLabel, ControlRowContainer } from "./ControlRow.styles";

export interface ControlRowProps {
  children: React.ReactElement;
  label: string;
  childId: string;
}

/**
 * Component for creating a form control row that links a label to the corresponding control.
 * @param {ControlRowProps} Props Props object containing the label text, the children to display
 *                                and the id of the child to link the label to.
 * @returns {React.ReactElement} A styled row for the form that links the label to its control.
 */
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
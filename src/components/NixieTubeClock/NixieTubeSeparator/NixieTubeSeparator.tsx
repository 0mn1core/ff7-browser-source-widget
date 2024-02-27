import { StyledNixieTubeSeparatorSVG } from "./NixieTubeSeparator.styles";

export interface NixieTubeSeparatorProps {
  isBlinking: boolean;
}

/**
 * SVG component for the separator between time segments in the Nixie tube clock.
 * @param {NixieTubeSeparatorProps} props Props object containing an `isBlinking` boolean. When true, the colon is illuminated.
 * @returns {React.ReactElement} The Nixie tube separator SVG, properly styled for the current time.
 */
const NixieTubeSeparator = ({isBlinking}: NixieTubeSeparatorProps): React.ReactElement => {
  return (
    <StyledNixieTubeSeparatorSVG isBlinking={isBlinking}/>
  )
}

export default NixieTubeSeparator;

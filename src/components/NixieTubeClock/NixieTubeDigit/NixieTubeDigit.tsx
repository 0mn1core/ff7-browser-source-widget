
import type { NixieDigitGroupProps } from "./NixieTubeDigitGroupCreators";

import { useMemo } from "react";
import { 
  ZeroNixieDigitGroup,
  OneNixieDigitGroup,
  TwoNixieDigitGroup,
  ThreeNixieDigitGroup,
  FourNixieDigitGroup,
  FiveNixieDigitGroup,
  SixNixieDigitGroup,
  SevenNixieDigitGroup, 
  EightNixieDigitGroup, 
  NineNixieDigitGroup 
} from "./NixieTubeDigitGroupCreators"

import { StyledNixieTubeDigitSVG } from "./NixieTubeDigit.styles";

/**
 * Helper function to create a render function for the given digit group component.
 * Takes care of attaching the key from this function call to the component while getting
 * other props as arguments to the render function
 * @param {string} key The react key to be assigned to the component
 * @param {(props: NixieDigitGroupProps) => React.ReactElement} Component The digit group component to create a render function for
 * @returns A render function with key already handled for the given digit group component that takes in props as an argument
 */
const createDigitRenderFunction = (
  key: string,
  Component: (props: NixieDigitGroupProps) => React.ReactElement
): (
  (props: NixieDigitGroupProps) => JSX.Element
) => {
  return (props: NixieDigitGroupProps) => {
    return (
      <Component key={key} {...props} />
    )
  }
}

const digitRenderFunctions = [
  createDigitRenderFunction('0', ZeroNixieDigitGroup),
  createDigitRenderFunction('1', OneNixieDigitGroup),
  createDigitRenderFunction('2', TwoNixieDigitGroup),
  createDigitRenderFunction('3', ThreeNixieDigitGroup),
  createDigitRenderFunction('4', FourNixieDigitGroup),
  createDigitRenderFunction('5', FiveNixieDigitGroup),
  createDigitRenderFunction('6', SixNixieDigitGroup),
  createDigitRenderFunction('7', SevenNixieDigitGroup),
  createDigitRenderFunction('8', EightNixieDigitGroup),
  createDigitRenderFunction('9', NineNixieDigitGroup)
]

export interface NixieTubeDigitProps {
  digit: number
}

/**
 * SVG component for a single digit in the Nixie tube clock.
 * @param {NixieTubeDigitProps} props Props object containing the digit that should be elevated and actively styled.
 * @returns The Nixie tube digit SVG, properly styled for the digit it represents.
 */
const NixieTubeDigit = ({digit}: NixieTubeDigitProps): React.ReactElement => {
  const digitGroups = useMemo(
    () => {
      const orderedDigitGroups = digitRenderFunctions.map(
        (renderFunction, index) => {
          if (index === digit) {
            return null;
          }
          return renderFunction({status: "inactive"});
        }
      )
      orderedDigitGroups.push(digitRenderFunctions[digit]({status: "active"}));
      return orderedDigitGroups;
    },
    [digit]
  );

  return (
    <StyledNixieTubeDigitSVG xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="64" height="96">
      {digitGroups}
    </StyledNixieTubeDigitSVG>
  );
}

export default NixieTubeDigit;
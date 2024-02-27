import type { ClockFormat } from "../../types/clock";

import { timeMatchesFormat } from "../../utils/clock-utils";
import NixieTubeDigit from "./NixieTubeDigit";
import NixieTubeSeparator from "./NixieTubeSeparator";

import { BorderContainer, ClockContainer } from "./NixieTubeClock.styles";

const digitKeyPrefixes = ["hour-digit", "minute-digit", "second-digit"];

const separatorKeys = ["hour-minute-separator", "minute-second-separator"];

export interface NixieTubeClockProps {
  clockFormat: ClockFormat;
  clockTime: string;
}

/**
 * 
 * @param props
 * @returns 
 */
const NixieTubeClock = ({
  clockFormat,
  clockTime,
}: NixieTubeClockProps): React.ReactElement => {
  const splitFormat = clockFormat.split(":");
  const formatArray = clockFormat.split("");
  let currentDigitSignifier = splitFormat[0]?.length;
  let digitKeyPrefixesIndex = 3 - splitFormat.length;
  let separatorKeysIndex = 3 - splitFormat.length;
  const timeArray = clockTime.split('');
  const isEven = Number(timeArray[timeArray.length-1]) % 2 === 0;

  return (
    <>
      {!timeMatchesFormat ? (
        null
      ) : (
        <BorderContainer>
          <ClockContainer>
            {
              formatArray.map(
                (value, index) => {
                  let component;
                  if(value === ":") {
                    // Create separator component, increment key trackers, set current digit signifier to length of next section.
                    component = (
                      <NixieTubeSeparator key={separatorKeys[separatorKeysIndex]} isBlinking={isEven} />
                    )
                    separatorKeysIndex++;
                    digitKeyPrefixesIndex++;
                    splitFormat.shift();
                    currentDigitSignifier = splitFormat[0]?.length;
                  } else {
                    // Create digit component, decrement current digit signifer.
                    component =  (
                      <NixieTubeDigit key={`${digitKeyPrefixes[digitKeyPrefixesIndex]}-${currentDigitSignifier}`} digit={Number(timeArray[index])}/>
                    )
                    currentDigitSignifier--;
                  }
                  return component;
                }
              )
            }
          </ClockContainer>
        </BorderContainer>
      )}
    </>
  )
};

export default NixieTubeClock

import type { Theme } from '@emotion/react';

import { useState } from 'react';
import { useEditableThemeDispatch } from '../../EditableThemeProvider/EditableThemeProvider';
import { HEX_FORMAT_REGEX } from '../../../utils/consts';

import { ValidationMessage } from "../../../utils/styles/ValidationMessage.styles";
import { HexInput } from './HexColorInput.styles';

export interface ColorHexInputProps {
  themeColorName: keyof Theme;
}

/**
 * Component for typing in the exact hex value for a theme color.
 * @param {ColorHexInputProps} props Props object containing the theme color's name to style and set.
 * @returns {React.ReactElement} An input that sets the appropriate theme color to an explicit typed in hex value.
 */
const ColorHexInput = ({
  themeColorName
}: ColorHexInputProps): React.ReactElement => {
  const dispatch = useEditableThemeDispatch();
  const [isValid, setIsValid] = useState(true);
  const [isClean, setIsClean] = useState(true);

  const validateHexFormat = (color: string) => {
    return HEX_FORMAT_REGEX.test(color)
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isClean) {
      setIsValid(validateHexFormat(e.currentTarget.value));
    }
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (isClean) {
      setIsClean(false);   
    }
    setIsValid(validateHexFormat(e.currentTarget.value))
  };

  const onKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const color = e.currentTarget.value
      if (validateHexFormat(color)) {
        dispatch(
          {
            key: themeColorName,
            value: color
          }
        );
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <div>
      <HexInput 
        type="text"
        placeholder="Enter hex value for color"
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeydownHandler}
      />
      <ValidationMessage validity={isValid}>{"Please enter a color hex value e.g. #123abc"}</ValidationMessage>
    </div>
  );
};

export default ColorHexInput;
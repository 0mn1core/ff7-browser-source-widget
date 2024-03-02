import type { Theme } from '@emotion/react';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import { HexColorPicker } from "react-colorful";
import { useEditableThemeDispatch } from '../EditableThemeProvider/EditableThemeProvider';
import HexColorInput from './HexColorInput';

import { ColorControlContainer, ColorMateria, ColorPickerContainer } from './ColorControl.styles';

export interface ColorControlProps {
  buttonId: string;
  themeColorName: keyof Theme;
}

/**
 * Component to allow users to set a theme color value using a hideable modal/tooltip.
 * @param {ColorControlProps} props Props object containing the id to set the button to and the theme color to control.
 * @returns A button that opens up a container on the side, allowing users to set colors using either a picker or hex value.
 */
const ColorControl = ({
  buttonId,
  themeColorName
}: ColorControlProps): React.ReactElement => {
  const theme = useTheme();
  const dispatch = useEditableThemeDispatch();
  const colorPickerContainerRef = useRef<HTMLDivElement>(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    // If picker is enabled, focus it
    if (showPicker) {
      colorPickerContainerRef.current?.focus();
    }
   }, [showPicker])

  const togglePicker = () => {
    setShowPicker(!showPicker);
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (showPicker && !e.currentTarget.contains(e.relatedTarget) && e.relatedTarget?.id !== buttonId) {
      togglePicker();
    }
  };

  const colorChangeHandler = (color: string) => {
    dispatch(
      {
        key: themeColorName,
        value: color
      }
    );
  }

  return(
    <ColorControlContainer>
      <ColorMateria id={buttonId} themeColorName={themeColorName} onClick={togglePicker} />
      <ColorPickerContainer tabIndex={0} onBlur={onBlurHandler} ref={colorPickerContainerRef} showPicker={showPicker}>
        <HexColorPicker color={theme[themeColorName]} onChange={colorChangeHandler}/>
        <HexColorInput themeColorName={themeColorName}/>
      </ColorPickerContainer>
    </ColorControlContainer>
  );
}

export default ColorControl;
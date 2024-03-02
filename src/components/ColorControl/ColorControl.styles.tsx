import { Theme } from "@emotion/react";

import styled from "@emotion/styled";

export interface ColorMateriaProps {
  themeColorName: keyof Theme;
}

interface ColorPickerContainerProps {
  showPicker: boolean;
}

export const ColorControlContainer = styled.div`
  display: inline-block;

  width: 100px;

  position: relative;
`;

export const ColorMateria = styled.button<ColorMateriaProps>`
  display: inline-block;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: none;

  margin-right: 50px;

  vertical-align: top;

  background-color: ${props => props.theme[props.themeColorName]};
`;

/**
 * It's exactly what I want, but why is this correctly positioned after the button and contributing to viewport size?
 */
export const ColorPickerContainer= styled.div<ColorPickerContainerProps>`
  display: inline-block;

  visibility: ${props => props.showPicker ? 'visible' : 'hidden'};

  position: absolute;
`;
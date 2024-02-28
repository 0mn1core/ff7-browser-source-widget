import type { FF7WidgetTheme } from "../types/theme";
import type { StandardAsymSliceBorderProps } from "./styles/StandardAsymSliceBorder.styles"

export const FF7_INITIAL_THEME: FF7WidgetTheme = {
  active_cathode_color: "#970c97",
  widget_background_color: "#000000",
  inactive_cathode_color: "#282828",
}

export const FF7_BORDER_VALUES: StandardAsymSliceBorderProps = {
  topHeight: "9px",
  leftWidth: "9px",
  rightWidth: "9px",
  botHeight: "9px",
  topLeft: {
    height: "9px",
    width: "9px",
  },
  topRight: {
    height: "9px",
    width: "12px",
  },
  botLeft: {
    height: "12px",
    width: "9px",
  },
  botRight: {
    height: "9px",
    width: "9px",
  },
}

export const TIME_FORMAT_REGEX = /^(\d{1,3}:)?[0-5]\d:[0-5]\d$/

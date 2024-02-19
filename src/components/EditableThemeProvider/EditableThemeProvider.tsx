import type { Dispatch } from "react"
import type { FF7WidgetTheme } from "../../types/theme";
import { createContext, useContext, useReducer } from "react";
import { ThemeProvider } from "@emotion/react";

interface ThemeUpdateAction {
  key: string;
  value: string;
}

interface EditableThemeProviderProps {
  children: React.ReactElement;
  initialTheme: FF7WidgetTheme;
}

const EditableThemeDispatchContext = createContext<Dispatch<ThemeUpdateAction> | undefined>(undefined);

/**
 * Hook function to retrieve the EditableThemeDispatch to dispatch actions to it.
 * If not called from within the appropriate context, will throw an error.
 * @returns {Dispatch<ThemeUpdateAction>} The dispatch to update the editable theme if called from within the appropriate context.
 */
export function useEditableThemeDispatch() {
  const dispatch = useContext(EditableThemeDispatchContext)
  if (!dispatch) {
    throw new Error("useEditableThemeDispatch must be called from within the EditableThemeDispatchContext provider.")
  }

  return dispatch
}

/**
 * Reducer function to update the theme passed to the theme provider.
 * @param {FF7WidgetTheme} state The current theme object to be updated.
 * @param {ThemeUpdateAction} action An object containing the name of the them
 * @returns The theme updated with the attribute and value represented by the action.
 */
function themeReducer(state: FF7WidgetTheme, action: ThemeUpdateAction): FF7WidgetTheme {
  return {
    ...state,
    [action.key]: action.value
  }
}

/**
 * Higher Order Component that encompasses the Emotion ThemeProvider, as well as a means to edit it in-application via a reducer.
 * @param {EditableThemeProviderProps} props A props object containing the initial theme, as well as the children to wrap. 
 * @returns A React component that wraps both the Emotion ThemeProvider as well as a context that allows it to be edited around the passed in children.
 */
const EditableThemeProvider = ({
  children,
  initialTheme,
}: EditableThemeProviderProps): React.ReactElement => {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <EditableThemeDispatchContext.Provider value={dispatch}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </EditableThemeDispatchContext.Provider>
  )
};

export default EditableThemeProvider;

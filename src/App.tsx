import EditableThemeProvider from "./components/EditableThemeProvider";
import FF7Overlay from "./components/FF7Overlay";
import { FF7_INITIAL_THEME } from "./utils/consts";

const App = () => (
  <EditableThemeProvider initialTheme={FF7_INITIAL_THEME}>
    <FF7Overlay/>
  </EditableThemeProvider>
);

export default App;

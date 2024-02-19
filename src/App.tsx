import EditableThemeProvider from "./components/EditableThemeProvider";
import { INITIAL_THEME } from "./utils/consts";

const App = () => (
  <EditableThemeProvider initialTheme={INITIAL_THEME}>
    <div>
      <h1>Hello, World!</h1>
    </div>
  </EditableThemeProvider>
);

export default App;

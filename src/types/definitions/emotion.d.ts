import type { FF7WidgetTheme } from '../theme';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends FF7WidgetTheme {}
}

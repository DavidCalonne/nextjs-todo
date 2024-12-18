declare module "next-themes" {
    export interface ThemeProviderProps {
      attribute?: string;
      defaultTheme?: string;
      enableSystem?: boolean;
      forcedTheme?: string;
      themes?: string[];
      storageKey?: string;
    }
  }
  
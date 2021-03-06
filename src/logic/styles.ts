// @ts-ignore
import { Theme, useThemeUI, ContextValue } from "theme-ui";

// ref: https://theme-ui.com/guides/typescript
function makeTheme<T extends Theme>(t: T) {
  return t;
}

export const theme = makeTheme({
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  borderRadius: "0.25rem",
  colors: {
    accent: "#70f470",
    background: "#eeeeee",
    iconBackground: "#ffffff",
    text: "#222",
    muted: "#73737D",
    boxShadow: "#000",
    twitterBlue: "#1DA1F2",
    modes: {
      dark: {
        background: "#1a1d21",
        iconBackground: "#222529",
        text: "rgba(255, 255, 255, 0.88)",
        muted: "#73737D",
        boxShadow: "#000",
      },
    },
  },
  fonts: {
    serif: "'Merriweather', 'Noto Sans JP', Georgia, Serif",
    sansSerif:
      "'Noto Sans JP', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  styles: {
    root: {
      "--ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      "--ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
      "--ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "--ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      "--ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      "--ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      transition: "background 0.25s var(--ease-in-out-quad)",
      a: {
        color: "inherit",
        textDecoratiog: "inherit",
      },
      button: {
        background: "none",
        color: "inherit",
        border: "none",
        padding: 0,
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
      },
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  breakpoints: ["37.5rem", "75rem"],
});

export type ExactTheme = typeof theme;

interface ExactContextValue extends Omit<ContextValue, "theme"> {
  theme: typeof theme;
}

export const useTheme = (useThemeUI as unknown) as () => ExactContextValue;

// TODO: fix shadow to match https://material-components.github.io/material-components-web-catalog/#/component/elevation
export const elevation = {
  0: "0px 0px 0px 0px var(--color-box-shadow)",
  1: "0px 2px 1px -1px var(--color-box-shadow)",
  2: "0px 3px 1px -2px var(--color-box-shadow)",
  3: "0px 3px 3px -2px var(--color-box-shadow)",
  4: "0px 2px 4px -1px var(--color-box-shadow)",
  5: "0px 3px 5px -1px var(--color-box-shadow)",
  6: "0px 3px 5px -1px var(--color-box-shadow)",
  7: "0px 4px 5px -2px var(--color-box-shadow)",
  8: "0px 5px 5px -3px var(--color-box-shadow)",
  9: "0px 5px 6px -3px var(--color-box-shadow)",
  10: "0px 6px 6px -3px var(--color-box-shadow)",
  11: "0px 6px 7px -4px var(--color-box-shadow)",
  12: "0px 7px 8px -4px var(--color-box-shadow)",
  13: "0px 7px 8px -4px var(--color-box-shadow)",
  14: "0px 7px 9px -4px var(--color-box-shadow)",
  15: "0px 8px 9px -5px var(--color-box-shadow)",
  16: "0px 8px 10px -5px var(--color-box-shadow)",
  17: "0px 8px 11px -5px var(--color-box-shadow)",
  18: "0px 9px 11px -5px var(--color-box-shadow)",
  19: "0px 9px 12px -6px var(--color-box-shadow)",
  20: "0px 10px 13px -6px var(--color-box-shadow)",
  21: "0px 10px 13px -6px var(--color-box-shadow)",
  22: "0px 10px 14px -6px var(--color-box-shadow)",
  23: "0px 11px 14px -7px var(--color-box-shadow)",
  24: "0px 11px 15px -7px var(--color-box-shadow)",
};

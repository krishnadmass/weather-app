import { darkTheme, lightTheme, Theme } from "../theme"

export const getCurrentTheme = (darkMode: boolean): Theme => {
    if (darkMode) {
      return darkTheme
    }
    return lightTheme
  }
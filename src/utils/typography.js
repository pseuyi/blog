import Typography from "typography"
import wikipediaTheme from "typography-theme-wikipedia"

const typography = new Typography(wikipediaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
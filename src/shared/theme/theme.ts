import { theme as proTheme } from "@chakra-ui/pro-theme"
import { extendTheme, theme as baseTheme } from "@chakra-ui/react"
import "@fontsource/inter/variable.css"

// import { blueDark, gray, grayDark, green, greenDark, red, redDark } from "@radix-ui/colors"

export const theme = extendTheme(
  {
    colors: {
      ...baseTheme.colors,
      brand: baseTheme.colors.blue,
      // ...gray,
      // ...green,
      // ...grayDark,
      // ...red,
      // ...blueDark,
      // ...redDark,
      // ...greenDark,
    },
  },
  proTheme
)

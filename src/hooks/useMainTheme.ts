import { useTheme } from "emotion-theming"
import { useEffect } from "react"
import { ITheme } from "../components/styled"
import { checkDark, useDark } from "./useDark"

export const useMainTheme = () => {
  const isDark = useDark()
  const theme = useTheme<ITheme>()

  return [isDark, isDark ? theme.dark : theme.normal] as const
}

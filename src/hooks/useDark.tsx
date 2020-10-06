import React, { createContext, useContext, useEffect, useState } from "react"

const windowGlobal = typeof window !== "undefined" ? window : undefined
const checkDark =
  windowGlobal?.matchMedia &&
  windowGlobal?.matchMedia("(prefers-color-scheme: dark)")?.matches

export const DarkModeContext = createContext({
  isDark: checkDark,
  setDark: (bool: boolean) => {},
})

export const DarkModeContextProvider = ({ children }: any) => {
  const [isDark, setDark] = useState(checkDark)
  return (
    <DarkModeContext.Provider
      value={{
        isDark,
        setDark,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDark = () => {
  const { isDark, setDark } = useContext(DarkModeContext)

  useEffect(() => {
    if (isDark) {
      window?.document.body.classList.add("dark")
    } else {
      window?.document.body.classList.remove("dark")
    }
  }, [isDark])
  return isDark
}

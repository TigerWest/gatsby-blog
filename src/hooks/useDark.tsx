import React, { createContext, useContext, useEffect, useState } from "react"

const windowGlobal = typeof window !== "undefined" ? window : undefined

/**
 * pre rendering과 브라우저렌더링 결과물이 달라 css가 rehydrate 되지 않는 문제 때문에
 * firstCall은 무조건 서버와 같이 false 그 이후에
 * 클라이언트에서 재 호출하여 정상 로직 흐름 처리
 */
let firstCall = false

export const checkDark = () => {
  if (!firstCall) {
    firstCall = true
    return false
  }
  return windowGlobal?.matchMedia &&
    windowGlobal?.matchMedia("(prefers-color-scheme: dark)")?.matches
    ? true
    : false
}

export const DarkModeContext = createContext({
  isDark: false,
  setDark: (bool: boolean) => {},
})

export const DarkModeContextProvider = ({ children }: any) => {
  const [isDark, setDark] = useState(checkDark())
  useEffect(() => {
    if (windowGlobal) {
      setDark(checkDark())
    }
  }, [windowGlobal])
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
  const { isDark } = useContext(DarkModeContext)

  useEffect(() => {
    if (isDark) {
      window?.document.body.classList.add("dark")
    } else {
      window?.document.body.classList.remove("dark")
    }
  }, [isDark])
  return isDark
}

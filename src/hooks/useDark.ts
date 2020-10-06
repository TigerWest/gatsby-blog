import { useEffect, useState } from "react"

const windowGlobal = typeof window !== "undefined" ? window : undefined
const checkDark =
  windowGlobal?.matchMedia &&
  windowGlobal?.matchMedia("(prefers-color-scheme: dark)")?.matches
export const useDark = () => {
  const [isDark, setDark] = useState(checkDark)
  console.log(checkDark)

  useEffect(() => {
    if (checkDark) {
      setDark(true)
      window?.document.body.classList.add("dark")
    } else {
      setDark(false)
      window?.document.body.classList.remove("dark")
    }
  }, [isDark])
  return [isDark, setDark]
}

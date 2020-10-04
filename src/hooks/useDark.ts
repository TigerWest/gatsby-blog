import { useEffect, useState } from "react"

export const useDark = () => {
  const [isDark, setDark] = useState(
    window?.matchMedia &&
      window?.matchMedia("(prefers-color-scheme: dark)")?.matches
  )

  useEffect(() => {
    if (
      window?.matchMedia &&
      window?.matchMedia("(prefers-color-scheme: dark)")?.matches
    ) {
      setDark(true)
      window?.document.body.classList.add("dark")
    } else {
      setDark(false)
      window?.document.body.classList.remove("dark")
    }
  }, [])
  return [isDark, setDark]
}

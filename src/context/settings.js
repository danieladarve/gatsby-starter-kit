import React, { createContext, useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"

const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState()

  const initializeSetting = ({
    localStorageKey,
    setValue,
    value,
    fallbackValue,
  }) => {
    if (typeof value !== "undefined") return

    const userValue = localStorage.getItem(localStorageKey)
    if (userValue !== null) {
      /*
       * For boolean values, we need to run JSON.parse() or else they’ll be
       * treated like strings. However, if we try to JSON.parse() a plain ol’
       * string, it borks. So this tries to parse first, then falls back to
       * using the string value if that doesn’t work.
       */
      let newValue
      try {
        newValue = JSON.parse(userValue)
      } catch (_) {
        newValue = userValue
      }

      setValue(newValue)
    } else {
      setValue(fallbackValue)
    }
  }

  useEffect(() => {
    initializeSetting({
      localStorageKey: "appsnwebsites.com:dark-mode",
      setValue: setDarkMode,
      value: darkMode,
      fallbackValue: window.matchMedia("(prefers-color-scheme: dark)").matches,
    })
  }, [darkMode, setDarkMode])

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = { children: PropTypes.node }

export { SettingsProvider }

export const useSettings = () => {
  const { darkMode, setDarkMode } = useContext(SettingsContext)

  const toggleDarkMode = () => {
    const newMode = !darkMode
    localStorage.setItem("appsnwebsites.com:dark-mode", newMode)
    setDarkMode(newMode)
  }

  return {
    darkMode,
    toggleDarkMode,
  }
}

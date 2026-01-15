"use client"

import { Provider } from "react-redux"
import { store } from "@/store"
import { useEffect } from "react"
import { fetchProperties } from "./propertiesSlice"

function Bootstrap() {
  const dispatch = store.dispatch

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return null
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <Bootstrap />
      {children}
    </Provider>
  )
}

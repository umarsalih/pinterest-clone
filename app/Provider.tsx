"use client" //marking is important to indicate that this is available only on client side and not the server side.
import React from 'react'
import { SessionProvider } from "next-auth/react"

function Provider({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider
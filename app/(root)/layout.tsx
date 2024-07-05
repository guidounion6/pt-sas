import React, { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Prueba Tecnica",
    description: "Profile App",
    icons: {
        icon: "/icons/logo.svg",
      },
};
const RootLayout = ({ children }: { children : ReactNode}) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default RootLayout
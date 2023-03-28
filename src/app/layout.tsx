export const metadata = {
  title: 'Produtos',
  description: 'Página de produtos, Lift Detox, Rveravit',
}
import { ReactNode } from "react"
import "../styles/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}

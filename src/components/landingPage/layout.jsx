import { Header } from "./header"
import { Footer } from "./footer"

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full">{children}</main>
      <Footer />
    </div>
  )
}


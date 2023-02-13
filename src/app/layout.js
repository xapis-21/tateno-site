import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-cover bg-no-repeat bg-center">{children}</body>
    </html>
  )
}

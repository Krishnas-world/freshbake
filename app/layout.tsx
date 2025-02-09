import "./globals.css"

export const metadata = {
  title: "Fresh Bake",
  description: "Premium quality cakes and bakery items made from scratch",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Brodaers-Rough', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}

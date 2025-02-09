import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";

const inter = Montserrat({ weight: ['100','200','300','400','500','600','700','800'], subsets: ["latin"] });//,'200',,'400','500','600','700','800','900'

export const metadata: Metadata = {
  title: "Fresh Bake",
  description: "Premium quality cakes and bakery items made from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      
      </body>
    </html>
  );
}
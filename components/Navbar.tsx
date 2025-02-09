import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="container text-2xl font-normal mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl md:text-3xl font-black">
        <Image src={'/hdlogo.png'} alt="FreshBake" height={40} width={60}/>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/cake" className="font-medium hover:text-orange-500 transition-colors">
          CAKE
        </Link>
        <Link href="/bakery" className="font-medium hover:text-orange-500 transition-colors">
          BAKERY
        </Link>
        <Link href="/about" className="font-medium hover:text-orange-500 transition-colors">
          ABOUT US
        </Link>
        <Link href="/cookies" className="font-medium hover:text-orange-500 transition-colors">
          COOKIES
        </Link>
        <Link href="/contact" className="font-medium hover:text-orange-500 transition-colors">
          CONTACT
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-yellow-300 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
          START BAKING
        </button>
        <button className="p-2">
          <ShoppingBag className="w-6 h-6" />
        </button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/cake" className="font-medium">
                CAKE
              </Link>
              <Link href="/bakery" className="font-medium">
                BAKERY
              </Link>
              <Link href="/about" className="font-medium">
                ABOUT US
              </Link>
              <Link href="/cookies" className="font-medium">
                COOKIES
              </Link>
              <Link href="/contact" className="font-medium">
                CONTACT
              </Link>
              <button className="bg-yellow-300 px-6 py-2 rounded-full font-bold w-full">START BAKING</button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}


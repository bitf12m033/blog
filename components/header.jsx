import Link from 'next/link'
import Navigation from './Navigation/navigation'
import Darkmode from './darkmode'
import useServerDarkMode from '@/hooks/use-server-dark-mode'
export default function Header() {
  const theme = useServerDarkMode()
  return (
    <header className="flex justify-between md:items-center mt-4">
        <div className="flex items-center md:space-x-12">
        <div className="hidden md:block">
            <Link href="/" className="text-xl">Piotr Jura</Link>
        </div>
        <Navigation />
        </div>
        <div>
          <Darkmode defaultTheme={theme}/>
        </div>
    </header>
  )
}
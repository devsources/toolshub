import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-slate-300 text-white sticky top-0 bg-slate-900 z-10 backdrop-blur-md">
      <nav className="h-16 max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold">
          <Link href="/">Devsources.</Link>
        </h1>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="https://github.com/devsources/devsources">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/github.png"
                alt="github"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import Link from 'next/link'

import { Bell, EditPencil, Menu, User } from 'iconoir-react'

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-around border-b border-gray-100 bg-white">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <button>
          <Menu />
        </button>
        <Link href="/">
          <span className="ml-8 text-xl font-light">Uninorte Times</span>
        </Link>
        <div className="flex items-center space-x-3">
          <button>
            <Bell />
          </button>
          <button>
            <User />
          </button>
          <button className="flex items-center space-x-1 rounded border border-gray-200 bg-zinc-900 px-4 py-3 text-gray-100 hover:border-gray-700 hover:bg-white hover:text-gray-700">
            <EditPencil />
            <span>Publicar</span>
          </button>
        </div>
      </div>
    </header>
  )
}

// TODO: Standard styles
// TODO: Componentize buttons

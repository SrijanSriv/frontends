import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Navbar() {

    const user = useUser()

    return (
        <nav className="fixed flex justify-between border-black border-b-2 bg-white w-full">
          <div className="text-5xl p-4 pl-10">
            FRONTENDS
          </div>

          <div className="flex items-center">
            <div className="flex min-h-full">
              <Link href={'/'} className="w-32 border-l-2 border-r-2 border-black text-center bg-yellow-400 pt-7 text-xl hover:bg-yellow-500">ABOUT</Link>
              <Link href={'/'} className="w-32 bg-pink-300 pl-5 pr-5 pt-7 text-xl hover:bg-pink-400">LIBRARY</Link>
              {user.isSignedIn?
                <Link href={'/dashboard'} className="w-32 bg-emerald-400 border-l-2 border-r-2 border-black pl-5 pr-5 text-xl pt-7 hover:bg-emerald-500">DBOARD</Link> :
                <></>
              }
              {user.isSignedIn?
                <SignOutButton><button className="w-32 border-r-2 border-black bg-red-500 pl-5 pr-5 pt-1 text-xl w-30 hover:bg-red-600">SIGN OUT</button></SignOutButton> :
                <SignInButton><button className="w-32 border-l-2 border-r-2 border-black bg-green-500 pl-5 pr-5 pt-1 text-xl w-30 hover:bg-green-600">SIGN IN</button></SignInButton>
              }
            </div>
          </div>
        </nav>
    )
}
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Navbar() {

    const user = useUser()

    return (
      <>
        <div className="flex w-full justify-between border border-b-2 border-black">
                <div className="text-5xl p-4 pl-6">
                    <Link href={'/'}>FRONTENDS</Link>
                </div>
                <div className="flex">
                <Link href={'/about'} className="bg-yellow-400 border-l-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-yellow-500">ABOUT</Link>
                <Link href={'/library'} className="bg-pink-300 border-l-2 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-pink-400">LIBRARY</Link>
                <Link href={'/dashboard'} className="bg-emerald-400 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-emerald-500">DBOARD</Link>
                {user.isSignedIn?
                  <SignOutButton><button className="w-32 border-r-2 border-black bg-red-500 pl-5 pr-5 pt-1 text-xl w-30 hover:bg-red-600">SIGN OUT</button></SignOutButton> :
                  <SignInButton><button className="w-32 border-l-2 border-r-2 border-black bg-green-500 pl-5 pr-5 pt-1 text-xl w-30 hover:bg-green-600">SIGN IN</button></SignInButton>
                }
                </div>
            </div>
        </>
    )
}
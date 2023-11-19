import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Library() {
    return (
        <div>
            <div className="flex w-full justify-between border border-b-2 border-black">
                <div className="text-5xl p-4 pl-6">
                    <Link href={'/'}>FRONTENDS</Link>
                </div>
                <div className="flex">
                <Link href={'/library'} className="bg-pink-400 border-l-2 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-pink-500">LIBRARY</Link>
                <Link href={'/dashboard'} className="bg-emerald-400 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-emerald-500">DBOARD</Link>
                    <div className="flex items-center justify-center bg-green-200 w-16 h-16 mr-2 mt-2 ml-2 rounded-full">
                        <div className="flex items-center justify-center bg-orange-400 w-12 h-12 rounded-full">
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex gap-4 bg-slate-300">
                <div className="flex w-1/4 justify-center border-2 border-black rounded-lg">
                <form className="">
                    <label htmlFor="prompt" className="">
                        <input id="prompt" className="border-2 border-black w-full"/>
                    </label>
                </form>
                </div>
                <div className="w-3/4 border-2 border-black border-t-0">
                    the canvas perhaps
                </div>
            </div> */}
            <div className="flex justify-center items-center text-5xl h-screen">
                I have not thought about this yet :(
            </div>
        </div>
        )
}
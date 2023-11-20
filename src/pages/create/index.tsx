import { UserButton } from "@clerk/nextjs";
import { Tldraw } from "@tldraw/tldraw";
import '@tldraw/tldraw/tldraw.css'
import Link from "next/link";
import { useState } from "react";

export default function Library() {
    const [size, setSize] = useState({dimensions : "h-4/5 w-2/3 mr-3 mt-5", fullscreen : false, icon : "↖️"})

    const changeSize = () => {
        if (!size.fullscreen) {
            setSize({dimensions : "h-screen w-screen z-50 inset-0", fullscreen : true, icon : "↘️"})
            
        } else {
            setSize({dimensions : "h-4/5 w-2/3 mr-3 mt-5", fullscreen : false, icon : "↖️"})
        }
    }

    return (
        <div className="">
            <div id="nav" className="flex w-full justify-between z-50 transition-all border border-b-2 border-black">
                <div className="text-5xl p-4 pl-6">
                    <Link href={'/'}>FRONTENDS</Link>
                </div>
                <div className="flex">
                <Link href={'/library'} className="bg-yellow-400 border-l-2 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-yellow-500">LIBRARY</Link>
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
            <div className="flex">
                <div>
                    side panel
                </div>
                <div className={size.dimensions + ` right-0 fixed bg-white`}>
                    <div onClick={changeSize} className=" hover:cursor-pointer bg-slate-200 max-w-fit pl-3 pr-3 pt-1">{size.icon}</div>
                    <Tldraw/>
                </div>
            </div>
        </div>
        )
}
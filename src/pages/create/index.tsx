import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic"
const Playground = dynamic(
    () => import("~/components/Playground").then((p) => p),
    { ssr: false }
)

export default function Library() {
    const [size, setSize] = useState({dimensions : "h-4/5 w-2/3", fullscreen : false, icon : "↖️"})

    const changeSize = () => {
        if (!size.fullscreen) {
            setSize({dimensions : "h-screen w-screen z-50 inset-0", fullscreen : true, icon : "↘️"})
            
        } else {
            setSize({dimensions : "h-4/5 w-2/3", fullscreen : false, icon : "↖️"})
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

            <div className="flex pt-5 ">
                <div className="flex flex-col text-center ml-8 mt-16  w-1/4 h-2/3 fixed border rounded-lg">
                    <h1 className="text-4xl">CONSOLE</h1>

                    <div>
                        <button className="border border-red-300">Save ig?</button>
                        <div className="border border-red-300">More Things</div>
                    </div>
                    
                    <form action="" className="h-10 border-red-300 border">
                        <input className="bg-transparent border border-black" />
                        <input type="submit" value={"Submit"} />
                    </form>
                </div>

                <div className={size.dimensions + ` mr-3 right-0 fixed bg-white pb-9`}>
                    <div onClick={changeSize} className=" hover:cursor-pointer bg-slate-200 max-w-fit pl-3 pr-3 pt-1">{size.icon}</div>
                    <Playground/>
                </div>
            </div>
        </div>
        )
}
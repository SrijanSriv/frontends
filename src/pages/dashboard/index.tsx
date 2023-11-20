import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api"

export default function Dashboard() {
    const user = useUser()
    if (user.user === null || user.user == undefined) return null;

    const frontends = api.views.getViews.useQuery({creatorId : user.user.id});

    return (
        <>
        <div className="flex w-full justify-between border border-b-2 border-black">
            <div className="text-5xl p-4 pl-6">
                <Link href={'/'}>FRONTENDS</Link>
            </div>
            <div className="flex">
            <Link href={'/library'} className="bg-yellow-400 border-l-2 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-yellow-500">LIBRARY</Link>
            <Link href={'/create'} className="bg-emerald-400 border-r-2 border-black pl-5 pr-5 pt-7 text-xl hover:bg-emerald-500">CREATE</Link>
                <div className="flex items-center justify-center bg-green-200 w-16 h-16 mr-2 mt-2 ml-2 rounded-full">
                    <div className="flex items-center justify-center bg-orange-400 w-12 h-12 rounded-full">
                        <UserButton afterSignOutUrl="/"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-24 p-20 pt-36">
            {frontends.data? frontends.data.map((views) =>{
                return (
                    <div key={views.id} className="border border-solid text-center">
                        <div>{views.title}</div>
                        <code>{views.code}</code>
                        <div>{views.createdAt.toDateString()}</div>
                        <div>a lot of junk to see how it behaves when i want it to behave a certain way 
                            a lot of junk to see how it behaves when i want it to behave a certain way 
                            a lot of junk to see how it behaves when i want it to behave a certain way 
                            a lot of junk to see how it behaves when i want it to behave a certain way.</div>
                    </div>
                )
            }) : <div className="text-center" >Loading Your Views...</div>}
        </div>
        </>
    )
}
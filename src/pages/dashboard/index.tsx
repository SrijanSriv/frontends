import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api"

export default function Dashboard() {
    const user = useUser()
    if (user.user === null || user.user == undefined) return null;

    const frontends = api.views.getViews.useQuery({creatorId : user.user.id});

    return (
        <>
        <div className="flex justify-between">
            <div>
                <Link href={'/'}>Home Page</Link>
            </div>
            <div>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
        <div>
            {frontends.data? frontends.data.map((views) =>{
                return (
                    <div key={views.id} className="border border-solid text-center">
                        <div>{views.title}</div>
                        <code>{views.code}</code>
                        <div>{views.createdAt.toDateString()}</div>
                    </div>
                )
            }) : <div>No views yet</div>}
        </div>
        </>
    )
}
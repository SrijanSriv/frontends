import Head from "next/head";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.views.hello.useQuery({text: "work in progress"})

  return (
    <>
      <Head>
        <title>Frontends</title>
        <meta name="description" content="A platform where the pain of frontend dev ends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>

        <div className="h-screen pt-40 flex justify-between items-center p-10">
          <div className="max-w-lg ml-20 bg-orange-400 text-center text-6xl">
            This website is {hello.isFetched ? <div>{hello.data?.greeting}</div> : "loading..."}
          </div>

          <div className="max-w-lg mr-20 bg-orange-300 text-center text-6xl">
            This website is {hello.isFetched ? <div>{hello.data?.greeting}</div> : "loading..."}
          </div>
        </div>
        
        <div className="h-screen flex justify-between items-center p-10 bg-blue-300">
          <div className="max-w-lg ml-20 bg-orange-400 text-center text-6xl">
            This website is {hello.isFetched ? <div>{hello.data?.greeting}</div> : "loading..."}
          </div>

          <div className="max-w-lg mr-20 bg-orange-300 text-center text-6xl">
            This website is {hello.isFetched ? <div>{hello.data?.greeting}</div> : "loading..."}
          </div>
        </div>
      </main>
    </>
  );
}

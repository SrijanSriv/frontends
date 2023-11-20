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

        <div className="h-screen w-screen flex items-center justify-center bg-blue-200">
          <div className="bg-orange-400 text-center text-6xl">
            This website is {hello.isFetched ? <div>{hello.data?.greeting}</div> : "loading..."}
          </div>
        </div>
      </main>
    </>
  );
}

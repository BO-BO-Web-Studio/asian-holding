import { Apartments } from "@widgets/apartments"
import { News } from "@widgets/news"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Новости | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <News />
        </>
}


export default Page
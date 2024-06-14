import { Apartments } from "@widgets/apartments"
import { News } from "@widgets/news"
import { Projects } from "@widgets/projects"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Проекты | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <Projects />
        </>
}


export default Page
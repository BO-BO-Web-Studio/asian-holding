import { NewsSlug } from "@widgets/news/ui/NewsSlug"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Подробнее | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <NewsSlug />
        </>
}


export default Page
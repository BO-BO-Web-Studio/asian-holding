import { About } from "@widgets/about"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>О компании | Asian Holding</title>
          <meta name='description' content='Квартиры' />
        </Head>
        <About />
        </>
}


export default Page
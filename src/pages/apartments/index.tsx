import { Apartments } from "@widgets/apartments"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Квартиры | Asian Holding</title>
          <meta name='description' content='Квартиры' />
        </Head>
        <Apartments />
        </>
}


export default Page
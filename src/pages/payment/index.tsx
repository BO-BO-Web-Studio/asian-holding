import { Payment } from "@widgets/payment"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Рассрочка и ипотека | Asian Holding</title>
          <meta name='description' content='Квартиры' />
        </Head>
        <Payment />
        </>
}


export default Page
import { ContactsPage } from "@widgets/contacts"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Контакты | Asian Holding</title>
          <meta name='description' content='Контакты' />
        </Head>
        <ContactsPage />
        </>
}


export default Page
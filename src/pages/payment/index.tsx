import { Payment } from "@widgets/payment"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"


function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
          <title>{`${t('payment')} | Asian Holding`}</title>
          <meta name='description' content='Квартиры' />
        </Head>
        <Payment />
        </>
}


export default Page
import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { ContactsPage } from "@widgets/contacts"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"

interface Props {
	residences?: IProjectCard[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const residences = await getFetcher(`/residences/get`, locale)
	
	return {
		props: {
			residences: residences.data.res
		}
	}
}

export default function Page({ residences }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return <>
        <Head>
          <title>Контакты | Asian Holding</title>
          <meta name='description' content='Контакты' />
        </Head>
        <ContactsPage residences={residences} />
        </>
}

import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { Apartments } from "@widgets/apartments"
import { News } from "@widgets/news"
import { INews } from "@widgets/news/model/News"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"


interface Props {
	news?: INews[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const news = await getFetcher(`/news/get`, locale)	
	
	return {
		props: {
			news: news.data.news
		}
	}
}

export default function Page({ news }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return <>
        <Head>
          <title>Новости | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <News news={news} />
        </>
}


import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { Apartments } from "@widgets/apartments"
import { News } from "@widgets/news"
import { INews } from "@widgets/news/model/News"
import { Projects } from "@widgets/projects"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"

interface Props {
	residences?: IProjectCard[]
	news?: INews[]

}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const residences = await getFetcher(`/residences/get`, locale)
  	const news = await getFetcher(`/news/get`, locale)
	
	
	return {
		props: {
			residences: residences.data.res,
			news: news.data.news
		}
	}
}

export default function Page({residences, news }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return <>
        <Head>
          <title>Проекты | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <Projects residences={residences} news={news} />
        </>
}


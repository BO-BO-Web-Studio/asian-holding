import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { INews } from "@widgets/news/model/News"
import { Projects } from "@widgets/projects"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import useTranslation from "next-translate/useTranslation"
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
    const { t } = useTranslation('common')

    return <>
        <Head>
          <title>{`${t('ourProjects')} | Asian Holding`}</title>
          <meta name='description' content={`${t('ourProjects')}`} />
        </Head>
        <Projects residences={residences} news={news} />
        </>
}


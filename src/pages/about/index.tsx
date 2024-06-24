import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { About } from "@widgets/about"
import { INews } from "@widgets/news/model/News"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

interface Props {
	news?: INews[]
  residences?: IProjectCard[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const news = await getFetcher(`/news/get`, locale)
  const residences = await getFetcher(`/residences/get`, locale)

	return {
		props: {
			news: news.data.news,
      residences: residences.data.res,
		}
	}
}

export default function Page({ news, residences }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { t } = useTranslation('common')

    return <>
        <Head>
          <title>{`${t('aboutCompany')} | Asian Holding`}</title>
          <meta name='description' content={`${t('aboutCompany')}`} />
        </Head>
        <About news={news} residences={residences} />
        </>
}


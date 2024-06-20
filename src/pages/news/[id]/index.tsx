import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { INews } from "@widgets/news/model/News"
import { NewsSlug } from "@widgets/news/ui/NewsSlug"
import { GetServerSideProps, InferGetServerSidePropsType, Metadata } from "next"
import Head from "next/head"


interface Props {
	newsSlug?: INews | null
  news?: INews[] | null
	
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

	const newsSlug = await getFetcher(`/news/${context.query.id}`)
  const news = await getFetcher(`/news/get`, context.locale)

	return {
		props: {
      newsSlug: newsSlug,
			news: news.data.news
		}
	}
}

function Page({ news, newsSlug }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return <>
        <Head>
          <title>Подробнее | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <NewsSlug news={news} newsSlug={newsSlug} />
      </>
}


export default Page
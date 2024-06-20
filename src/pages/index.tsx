import Head from "next/head";
import { Inter } from "next/font/google";
import { MainBanner } from "@widgets/mainBanner";
import { PhotoGallery } from "@widgets/photoGallery";
import { SearchBar } from "@widgets/searchBar";
import { ProjectsSection } from "@widgets/projects";
import { NewsSection } from "@widgets/news";
import 'i18next'
import { IMainSlide } from "@widgets/mainBanner/model/MainBanner";
import { getFetcher } from "@shared/api/fetcher/getFetcher";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { INews } from "@widgets/news/model/News";
import { IProjectCard } from "@widgets/projects/model/IProjectCard";

interface Props {
	banners?: IMainSlide[]
	news?: INews[]
	residences?: IProjectCard[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const banners = await getFetcher(`/main_banner/get`, locale)
	const news = await getFetcher(`/news/get`, locale)
	const residences = await getFetcher(`/residences/get`, locale)
	
	
	return {
		props: {
			banners: banners,
			news: news.data.news,
			residences: residences.data.res
		}
	}
}

export default function Home({ banners, news, residences }: InferGetServerSidePropsType<typeof getServerSideProps>) {

	return (
		<>
			<Head>
				<title>Asian Holding</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main >
        		<MainBanner banners={banners} />
				<ProjectsSection residences={residences} />
				<SearchBar />
				<PhotoGallery residences={residences} />
				<NewsSection news={news} />
			</main>
		</>
	)
}
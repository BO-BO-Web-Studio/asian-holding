import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { ProjectsSlug } from "@widgets/projects/ui/ProjectsSlug"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

interface Props {
  project?: IProjectCard | null
	
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

	const project = await getFetcher(`/residences/${context.query.id}`)

	return {
		props: {
      project: project,
		}
	}
}

function Page({ project }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { t } = useTranslation('common')

    return <>
        <Head>
          <title>{`${t('moreAboutProject')} | Asian Holding`}</title>
          <meta name='description' content={`${t('moreAboutProject')} | Asian Holding`} />
        </Head>
        <ProjectsSlug project={project} />
        </>
}


export default Page
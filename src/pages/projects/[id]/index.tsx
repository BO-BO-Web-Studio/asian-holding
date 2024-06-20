import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { ProjectsSlug } from "@widgets/projects/ui/ProjectsSlug"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
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

    return <>
        <Head>
          <title>Подробнее о проекте | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <ProjectsSlug project={project} />
        </>
}


export default Page
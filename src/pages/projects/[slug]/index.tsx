import { ProjectsSlug } from "@widgets/projects/ui/ProjectsSlug"
import Head from "next/head"


function Page() {
    return <>
        <Head>
          <title>Подробнее о проекте | Asian Holding</title>
          <meta name='description' content='Новости' />
        </Head>
        <ProjectsSlug />
        </>
}


export default Page
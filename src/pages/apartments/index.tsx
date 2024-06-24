import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { Apartments } from "@widgets/apartments"
import { IProjectCard, IResidences } from "@widgets/projects/model/IProjectCard"
import { IStatus } from "@widgets/searchBar"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"


interface Props {
  residences?: IProjectCard[]
	apartments?: IResidences[]
	status?: IStatus[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, query }) => {
	
	const apartments = await getFetcher(`/residences/filter`, locale)	
  const residences = await getFetcher(`/residences/get`, locale)	
  const status = await getFetcher(`/status/get`, locale)

	return {
		props: {
			apartments: apartments,
      status: status,
      residences: residences.data.res
		}
	}
}

export default function Page({apartments, residences, status}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { t } = useTranslation('common')


    return <>
        <Head>
          <title>{`${t('chooseApartment')} | Asian Holding`}</title>
          <meta name='description' content={`${t('chooseApartment')}`} />
        </Head>
          <Apartments 
            apartments={apartments} 
            status={status} 
            residences={residences}  
          />
        </>
}

